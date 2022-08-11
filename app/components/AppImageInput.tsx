import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

// Assets
import Colors from "../assets/_colors";

const requestPermission = () => {
    ImagePicker.requestMediaLibraryPermissionsAsync().then(({ status }) => {
        if (status !== "granted") {
            alert("Sorry, we need camera roll permissions to make this work!");
        }
    });
};

const openMediaLibrary = (onChangeImage: (uri:string)=>void) => {
    ImagePicker.getMediaLibraryPermissionsAsync().then((result) => {
        if (result.status === "granted") {
            try {
                ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    aspect: [4, 3],
                    quality: 1,
                }).then((result) => {
                    if (!result.cancelled) {
                        onChangeImage(result.uri);
                    }
                });
            } catch (error) {
                alert(
                    "It appears we can't access your media library at the moment. Please try again"
                );
            }
        } else {
            requestPermission();
        }
    });
};

export default function test({ onChangeImage }:{onChangeImage: (uri:string)=>void}) {

    useEffect(() => {
        requestPermission();
    }, []);

    return (
        <Pressable onPress={() => openMediaLibrary(onChangeImage)}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    size={34}
                    name="camera"
                    color={Colors.medium}
                />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.plain,
        width: 70,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
});
