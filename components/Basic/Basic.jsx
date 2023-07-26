import {Image, TouchableOpacity, View} from "react-native";
import {Txt} from "../Txt/Txt";

import { s } from "./Basic.style"
import {Clock} from "../Clock/Clock";

export function Basic({onPress, temperature, city, interpretation}) {
    return (
        <>
            <View style={s.clock}>
                <Clock/>
            </View>

            <Txt>{city}</Txt>
            <Txt style={s.label}>{interpretation.label}</Txt>
			<View style={s.temperature_box}>
				<TouchableOpacity onPress={onPress}>
                    <Txt style={s.degree}>{temperature}°</Txt>
                </TouchableOpacity>
				<Image source={interpretation.image} style={s.image} />
			</View>
        </>
    )
}