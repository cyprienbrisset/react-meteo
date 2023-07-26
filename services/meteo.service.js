const WEATHER_INTERPRETATION = [
    {
        codes: 0,
        image:require("../assets/images/sun.png"),
        label: "Ciel dégagé"
    },
    {
        codes: 1,
        image:require("../assets/images/sun.png"),
        label: "Ciel clair"
    },
    {
        codes: 2,
        image:require("../assets/images/cloudy.png"),
        label: "Partiellement nuageux"
    },
    {
        codes: 3,
        image: require("../assets/images/overcast.png"),
        label: "Couvert"
    },
    {
        codes: 45,
        image:"",
        label: "Brouillard"
    },
    {
        codes: 48,
        image:"",
        label: "Brouillard de chaux"
    },
    {
        codes: 51,
        image:require("../assets/images/bruine.png"),
        label: "Bruine légère"
    },
    {
        codes: 53,
        image:require("../assets/images/bruine.png"),
        label: "Bruine modérée"
    },
    {
        codes: 55,
        image:require("../assets/images/bruine.png"),
        label: "Bruine dense"
    },
    {
        codes: 56,
        image:"",
        label: "Brouillard givrant léger"
    },
    {
        codes: 57,
        image:"",
        label: "Brouillard givrant dense"
    },
    {
        codes: 61,
        image:require("../assets/images/rain.png"),
        label: "Pluie légére"
    },
    {
        codes: 63,
        image:require("../assets/images/rain.png"),
        label: "Pluie modérée"
    },
    {
        codes: 65,
        image:require("../assets/images/rain.png"),
        label: "Pluie intense"
    },
    {
        codes: 66,
        image:"",
        label: "Pluie verglaçante légére"
    },
    {
        codes: 67,
        image:"",
        label: "Pluie verglaçante intense"
    },
    {
        codes: 71,
        image:"",
        label: "Chute de neige légére"
    },
    {
        codes: 73,
        image:"",
        label: "Chute de neige modérée"
    },
    {
        codes: 75,
        image:"",
        label: "Chute de neige intense"
    },
    {
        codes: 77,
        image:"",
        label: "Grêle"
    },
    {
        codes: 80,
        image:"",
        label: "Averses légére"
    },
    {
        codes: 81,
        image:"",
        label: "Averses modérée"
    },
    {
        codes: 82,
        image:"",
        label: "Averses violente"
    },
    {
        codes: 85,
        image:"",
        label: "Averse de neige légére"
    },
    {
        codes: 86,
        image:"",
        label: "Averses de neige abondantes"
    },
    {
        codes: 95,
        image:"",
        label: "Légèrement orageux"
    },
    {
        codes: 96,
        image:"",
        label: "Orage avec grêle légère"
    },
    {
        codes: 99,
        image:"",
        label: "Orage avec grêle forte"
    },
];

export function getWeatherInterpretation(code) {
    return WEATHER_INTERPRETATION.find((interpretation) => interpretation.codes === code)
}