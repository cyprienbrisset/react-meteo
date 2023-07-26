import { s } from "./Searchbar.style"
import {TextInput} from "react-native";

export function Searchbar({onSubmit}) {
	return (
		<TextInput onSubmitEditing={(e)=> {onSubmit(e.nativeEvent.text)}} style={s.input} placeholder="Chercher une ville... "/>
	)
}