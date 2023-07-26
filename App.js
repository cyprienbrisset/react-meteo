import {Home} from "./pages/Home/Home";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf"
import {useFonts} from "expo-font";
import {NavigationContainer} from "@react-navigation/native";
import CreateNativeStackNavigator from "@react-navigation/native-stack/src/navigators/createNativeStackNavigator";
import {Forecast} from "./pages/Forecast/Forecast";


const Stack = CreateNativeStackNavigator()

const navTheme = {
    colors: {
        background: "transparent"
    }
}

export default function App() {
    const [isFontLoaded] = useFonts({
        "Alata-Regular": AlataRegular
    })
    return (
        <NavigationContainer theme={navTheme}>
                        {isFontLoaded ? (<Stack.Navigator screenOptions={{headerShown: false, animation:"fade_from_bottom"}} initialRouteName="Home">
                            <Stack.Screen name="Home" component={Home}/>
                            <Stack.Screen name="Forecast" component={Forecast}/>
                        </Stack.Navigator> ): null}
        </NavigationContainer>
    );
}
