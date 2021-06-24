import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Assets
import Colors from '../assets/_colors'

export default function ListItemSeperator() {
    return (
        <View style={styles.seperator} />
    )
}

const styles = StyleSheet.create({
    seperator:{
        width: "100%",
        height: 5,
        backgroundColor: Colors.offwhite
    }
})
