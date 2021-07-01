import React from 'react'
import {View, StyleSheet, TextInput, Platform} from 'react-native'

//Components
// import SafeAreaScreen from './Screens/SafeAreaScreen'

//Assets
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Colors from '../assets/_colors'
import defaultStyles from '../config/_styles'

export default function AppTextInput({icon, style, ...rest}){

    return(

        <View style={[styles.container, style]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={Colors.medium} style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...rest} />
        </View>

    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.plain,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon:{
        marginRight: 10
    },
    text:{
        flex: 1
    }
})
