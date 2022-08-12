import React from "react";
import { Image as RNImage, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Image } from "react-native-expo-image-cache";

// Components
import Colors from "../assets/_colors";
import AppText from "./AppText";

// Assets

type CardProps={
    title:string,
    subTitle:string,
    imageUrl:string,
    style?: StyleProp<ViewStyle>,
    thumbnailUrl: string,
    onPress: (arg:any)=>any,
    borderRadius?: number,
}

export default function Card({
    title,
    subTitle,
    imageUrl,
    style,
    thumbnailUrl,
    onPress,
}:CardProps) {
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.container, { ...style }]}>
                {/* <Image style={styles.image} source={{uri: imageUrl}} /> */}
                <Image
                    style={styles.image}
                    tint="light"
                    uri={imageUrl}
                    preview={{ uri: thumbnailUrl }}
                />
                <View style={styles.cardFooter}>
                    <View style={styles.captionsWrapper}>
                        <AppText
                            style={styles.title}
                            numberOfLines={1}
                        >
                            {title}
                        </AppText>
                        <AppText
                            numberOfLines={1}
                            style={styles.subTitle}
                        >
                            {subTitle}
                        </AppText>
                    </View>
                    <View
                        style={styles.badgeWrapper}
                    >
                        <RNImage
                            source={require("../assets/img/verified.png")}
                            style={styles.badge}
                        />
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    badge: {
        width: 23,
        height: 23,
    },
    container: {
        backgroundColor: Colors.plain,
        width: "100%",
        // height: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    cardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5,
    },
    captionsWrapper: {
        display: "flex",
        flexDirection: "column",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    title: { fontWeight: "bold" },
    subTitle: {
        color: Colors.secondary,
        fontWeight: "bold",
    },
    badgeWrapper:{
        justifyContent: "center",
        alignItems: "center",
    }
});
