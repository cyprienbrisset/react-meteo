import {s} from "./Container.style";
import background from "../../assets/bg1.jpeg";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ImageBackground} from "react-native";

export function Container({children}) {
	return (
		<ImageBackground style={s.background_container} source={background} imageStyle={s.background}>
			<SafeAreaProvider>
				<SafeAreaView style={s.container}>
					{children}
				</SafeAreaView>
			</SafeAreaProvider>
		</ImageBackground>
	)
}