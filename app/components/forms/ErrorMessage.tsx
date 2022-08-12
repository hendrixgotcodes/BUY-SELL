import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

// Components
import Colors from "../../assets/_colors";
import AppText from "../AppText";

// Assets

export default function ErrorMessage({ message }:{message: ReactNode}) {
    if (!message) return null;

    return <AppText style={styles.appText as StyleProp<ViewStyle> }>{message}</AppText>;
}

const styles = StyleSheet.create({
    appText: {
        fontSize: 16,
        color: Colors.danger,
    },
});
