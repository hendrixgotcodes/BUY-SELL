import React from 'react'
import { ActivityIndicator, View, Text, StyleSheet, Pressable } from 'react-native'

//Components
import AppText from './AppText'

//Assets
import Colors from '../assets/_colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Button({style, title, isLoading, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.button, {...style}]}>
                {
                    isLoading && (
                        <View style={styles.indicatorWrapper}>
                            <ActivityIndicator size="small" color={Colors.plain} />
                        </View>
                    )
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
    indicatorWrapper:{
        marginRight: 10
    },
    text: {
        fontWeight: "bold",
        color:Colors.plain,
        textTransform: "uppercase"
    }
})