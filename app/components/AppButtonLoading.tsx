import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    ActivityIndicator, StyleProp,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";

// Components
import Colors from "../assets/_colors";
import AppText from "./AppText";

type ButtonType={
    style: StyleProp<ViewStyle>, 
    title: string, 
    icon?: keyof typeof MaterialCommunityIcons.glyphMap, 
    onPress: (e:any)=>any,
    isLoading: boolean
}

export default function Button({ style, title, isLoading, onPress }:ButtonType) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={[styles.button, { ...style as object }]}>
                {isLoading && (
                    <View style={styles.indicatorWrapper}>
                        <ActivityIndicator size="small" color={Colors.plain} />
                    </View>
                )}
                <AppText numberOfLines={1} style={styles.text as StyleProp<ViewStyle>}>{title}</AppText>
            </View>
        </TouchableOpacity>
    );
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
        flexDirection: "row",
    },
    indicatorWrapper: {
        marginRight: 10,
    },
    text: {
        fontWeight: "bold",
        color: Colors.plain,
        textTransform: "uppercase",
    },
});
