import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Assets
import Colors from '../assets/_colors'

export default function ListItemSeperator({gap}) {
    return (
        <View style={[styles.seperator, {height: gap}]} />
    )
}


const styles = StyleSheet.create({
    seperator:{
        width: "100%",
        height: 2,
        // backgroundColor: "red"
        backgroundColor: Colors.offwhite
    }
})
