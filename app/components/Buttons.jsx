import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../assets/_colors'

export const PrimaryButton = ({caption})=>{
    return (
        <View style={styles.btnPrimary}>
            <Text style={styles.text}>
                {caption}
            </Text>
        </View>
    )
}

export const SecondaryButton = ({caption})=>{

    return(
        <View style={styles.btnSecondary}>
            <Text style={styles.text}>
                {caption}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({

    btnPrimary: {
        backgroundColor: colors.primary,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    btnSecondary: {
        backgroundColor: colors.secondary,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: colors.plain,
        fontSize: 20
    }

})
