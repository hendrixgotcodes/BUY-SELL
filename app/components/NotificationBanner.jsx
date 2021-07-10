import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

//Assets
import Colors from '../assets/_colors'

//Components
import AppText from './AppText'
 
export default function NotificationBanner({text}) {
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>No internet connection</AppText>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Colors.primary,
        height: 50,
        justifyContent: "center",
        position: "absolute",
        top: Constants.statusBarHeight,
        width: "100%",
        zIndex: 55000,
        display: "flex",
    },
    text: {
        color: Colors.plain
    }
})