import { s } from "./Txt.style"
import {Text, useWindowDimensions} from "react-native";

export function Txt({children, style}) {

	const {height} = useWindowDimensions()
	const fontSize = style?.fontSize || s.text.fontSize
	const c = (1/height)

	return (
		<Text style={[s.text, style, {fontSize: fontSize * c * height }]}>{children}</Text>
	)
}