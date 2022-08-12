import React from "react";
import { StyleSheet, View } from "react-native";

// Assets
import Colors from "../assets/_colors";

const styles = StyleSheet.create({
    seperator: {
        width: "100%",
        height: 2,
        // backgroundColor: "red"
        backgroundColor: Colors.offwhite,
    },
});

export default function ListItemSeperator({ gap }:{gap?:number|number}) {
    return <View style={[styles.seperator, { height: gap }]} />;
}
