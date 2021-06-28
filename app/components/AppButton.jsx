import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

//Components
import AppText from './AppText'

//Assets
import Colors from '../assets/_colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Button({style, title, icon, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.button, {...style}]}>
                {
                    icon && <MaterialCommunityIcons name={icon} size={20} color={Colors.plain} />
                }
                <AppText style={styles.text}>
                    {title}
                </AppText>
            </View>
        </Pressable>
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
        backgroundColor: Colors.primary,
        flexDirection: "row"
    },
    text: {
        fontWeight: "bold",
        color:Colors.plain,
        textTransform: "uppercase"
    }
})