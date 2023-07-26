import { StyleSheet} from "react-native";

export const s= StyleSheet.create({
    clock:{
        alignItems: "flex-end"
    },
    city:{},
    label:{
        alignSelf:"flex-end",
        fontSize:20,
        transform:[{rotate: "-90deg"}]
    },
    temperature_box: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"baseline"
    },
    degree:{
        fontSize:150
    },
    image: {
        height:180,
        width:180,
        tintColor: "white"
    }
})