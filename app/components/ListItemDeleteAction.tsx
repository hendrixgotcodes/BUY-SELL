import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import Colors from "../assets/_colors";

// Assets

export default function ListItemDeleteAction({ onPress }:{onPress?:(arg?:any)=>any}) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={24}
                    color={Colors.plain}
                />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: "100%",
        backgroundColor: Colors.danger,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
