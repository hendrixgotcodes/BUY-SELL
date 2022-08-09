import { MaterialCommunityIcons } from "@expo/vector-icons";import React from "react";import { StyleSheet, View } from "react-native";import AppText from "./AppText";// Assetsexport default function Icon({    backgroundColor,    color,    width,    iconSize,    text,    iconName,}) {    return (        <View style={styles.container}>            <View                style={[                    styles.iconWrapper,                    {                        backgroundColor,                        width,                        height: width,                        // width: 60,                        // height: 60                    },                ]}            >                <MaterialCommunityIcons                    name={iconName}                    size={iconSize}                    color={color}                />            </View>            <AppText style={{ fontWeight: "bold", textAlign: "center" }}>                {text}            </AppText>        </View>    );}const styles = StyleSheet.create({    container: {        display: "flex",        flexDirection: "column",        padding: 10,        justifyContent: "center",        alignItems: "center",    },    iconWrapper: {        borderRadius: 100,        display: "flex",        justifyContent: "center",        alignItems: "center",    },});