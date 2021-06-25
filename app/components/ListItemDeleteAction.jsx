import React from 'react'
import { View, StyleSheet, Pressable} from 'react-native'
import AppText from './AppText'

//Assets
import Colors from '../assets/_colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListItemDeleteAction({onPress}) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can-outline" size={24} color={Colors.plain} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 70,
        height: "100%",
        backgroundColor: Colors.danger,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: Colors.plain,
        // fontSize: Platform.OS === "android" : 
    }
})
