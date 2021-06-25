import {Platform} from 'react-native'

//Assets
import Colors from '../assets/_colors'

export default {
    text: {
        color: Colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
}