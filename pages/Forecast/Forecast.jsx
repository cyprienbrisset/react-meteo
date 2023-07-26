import {s} from "./Forecast.style"
import {Txt} from "../../components/Txt/Txt";
import {Container} from "../../components/Container/Container";
import {useNavigation, useRoute} from "@react-navigation/native";
import {TouchableOpacity, View} from "react-native";
import {ForecastListItem} from "../../components/ForecastListItem/ForecastListItem";
import {getWeatherInterpretation} from "../../services/meteo.service";
import {dateToDDMM, DAYS} from "../../services/date.service";

export function Forecast({}) {

	const nav = useNavigation()

	const {params} = useRoute()

	const backButton = (
		<TouchableOpacity style={s.button} onPress={() => {nav.goBack()}}>
			<Txt>{"<"}</Txt>
		</TouchableOpacity>
	)
	const header = (
		<View style={s.header}>
			{backButton}
			<View style={s.header_texts}>
				<Txt style={s.city}>{params.location}</Txt>
				<Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
			</View>
		</View>
	)

	const forecastList = (
		<View style={s.forecast_list}>
			{params.time.map((time, index) => {
				const code = params.weathercode[index]
				const date = new Date(time)
				const image = getWeatherInterpretation(code).image
				const temperature = params.temperature_2m_max[index]
				console.log("Image",image)
				const day = DAYS[date.getDay()]
				return <ForecastListItem image={image} day={day} date={dateToDDMM(date)} temperature={temperature.toFixed()} key={time}/>
			})}
		</View>
	)

    return (
        <Container>
			{header}
			{forecastList}
        </Container>
    )
}