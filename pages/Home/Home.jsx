
import { s } from "./Home.style"
import {Alert, Text, View} from "react-native";

import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import {useEffect, useState} from "react";
import {MeteoAPI} from "../../api/meteo";
import {Txt} from "../../components/Txt/Txt";
import {Basic} from "../../components/Basic/Basic";
import {getWeatherInterpretation} from "../../services/meteo.service";
import {Advanced} from "../../components/Advanced/Advanced";
import {useNavigation} from "@react-navigation/native";
import {Container} from "../../components/Container/Container";
import {Searchbar} from "../../components/Searchbar/Searchbar";

export function Home() {

	const [coords, setCoords] = useState()
	const [weather, setWeather] = useState()
	const [location, setLocation] = useState()

	const nav = useNavigation()

	const currentWeather = weather?.current_weather

	useEffect(() => {
		getUserCoords()
	}, []);

	useEffect(() => {
		if (coords){
			fetchWeather(coords)
			fetchLocalisation(coords)
		}
	}, [coords]);

	async function getUserCoords(){
		let {status} = await requestForegroundPermissionsAsync()
		if (status === "granted"){
			const location = await getCurrentPositionAsync()
			setCoords(
				{lat: location.coords.latitude, lng: location.coords.longitude
				})
		} else {
			// Coordonnée de Paris
			setCoords({lat: "48.85", lng: "2.35"})
		}
	}

	async function fetchWeather(coordinates) {
		const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates)
		setWeather(weatherResponse)
	}

	async function fetchLocalisation (coordinates) {
		const locationResponse = await MeteoAPI.fetchCityFromCoords(coordinates)
		setLocation(locationResponse)
	}

	async function fetchCoordsByCity (city) {
		try {
		const coords = await MeteoAPI.fetchCoordsFromCity(city)
		setCoords(coords)
		} catch (e) {
			Alert.alert("Oupps !", e)
		}
	}

	function goToForecastPage(){
		console.log({location, ...weather.daily})
		nav.navigate("Forecast", {location, ...weather.daily})
	}

	return (
		currentWeather ? (
		<Container>
			<View style={s.basic}>
				<Basic temperature={Math.round(currentWeather?.temperature)} city={location} interpretation={getWeatherInterpretation(currentWeather.weathercode)} onPress={goToForecastPage}></Basic>
			</View>
			<View style={s.search}>
				<Searchbar onSubmit={fetchCoordsByCity}></Searchbar>
			</View>
			<View style={s.advanced}>
				<Advanced windValue={Math.round(currentWeather.windspeed)} dusk={weather.daily.sunrise[0].split("T")[1]} dawn={weather.daily.sunset[0].split("T")[1]}/>
			</View>
		</Container>
		) : null
	)
}