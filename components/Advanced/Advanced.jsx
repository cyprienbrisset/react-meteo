import {s} from "./Advanced.style"
import {Image, View} from "react-native";
import {Txt} from "../Txt/Txt";

import aube from "../../assets/images/aube.png"
import crepuscule from "../../assets/images/crepuscule.png"
import wind from "../../assets/images/wind.png"

export function Advanced({windValue, dusk, dawn}) {
    return (
        <View style={s.container}>
            <View style={s.data}>
                <Txt style={s.value}>{dusk}</Txt>
				<Image source={aube} style={{width:80, height:80, tintColor: "white"}}/>
            </View>
            <View style={s.data}>
                <Txt style={s.value}>{dawn}</Txt>
				<Image source={crepuscule} style={{width:80, height:80, tintColor: "white"}}/>
            </View>
            <View style={s.data}>
                <Txt style={s.value}>{windValue} Km/h</Txt>
                <Image source={wind} style={{width:80, height:80, tintColor: "white"}}/>
            </View>
        </View>
    )
}