import {DefaultTheme} from '@react-navigation/native'
import Colors from '../../assets/_colors'

const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.primary,
        background: Colors.offwhite
    }
}

export default myTheme