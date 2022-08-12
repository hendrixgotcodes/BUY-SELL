import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

// Assets
import Colors from "../../assets/_colors";

export default function NewListingButton({ onPress }: {onPress: (arg?:any)=>any}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="plus-circle"
                    color={Colors.white}
                    size={40}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Colors.primary,
        borderRadius: 100,
        borderColor: Colors.white,
        borderWidth: 10,
        bottom: 30,
        height: 80,
        justifyContent: "center",
        width: 80,
    },
});
