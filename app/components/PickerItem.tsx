import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import AppText from "./AppText";


export default function PickerItem({ label, onPress }:{ label:string, onPress?:(arg?:any)=>any }) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <AppText>{label}</AppText>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
});
