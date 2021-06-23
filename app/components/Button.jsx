import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Components
import AppText from './AppText'

//Assets
import Colors from '../assets/_colors'

export default function Button({style, children}) {
    return (
        <View style={[styles.button, {...style}]}>
            <AppText style={styles.text}>
                {children}
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        paddingVertical: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        backgroundColor: Colors.primary
    },
    text: {
        fontWeight: "bold",
        color:Colors.plain
    }
})