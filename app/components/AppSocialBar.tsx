import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import { Platform, Pressable, Share, StyleSheet, View } from "react-native";

// Assets
import Colors from "../assets/_colors";

type AppSocialBarType={
    handleOnMessage?: (arg?:any)=>any,
    onShared?: (arg?:any)=>any,
    onShareFailed?: (reason:any)=>any,
    onLiked?: (arg?:any)=>any
}

export default function AppSocialBar({
    handleOnMessage,
    onShared,
    onShareFailed,
    onLiked,
}:AppSocialBarType) {
    const [hasLiked, setHasLiked] = useState(false);

    const handleOnLike = () => {
        if (hasLiked === true) {
            setHasLiked(false);
        } else {
            setHasLiked(true);
            Haptics.selectionAsync();
        }

        onLiked !== undefined && onLiked(hasLiked);
    };

    const handleOnShare = async () => {
        const result = await Share.share({
            message: "https://google.com",
            ...Platform.select({
                ios: {
                    url: "https://google.com",
                },
                android: {
                    title: "Share a listing",
                },
            }),
        });

        if (result.action === Share.sharedAction) {
            onShared !== undefined && onShared();
        } else {
            onShareFailed !== undefined && onShareFailed("failed");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.actionsWrapper}>
                <Pressable
                    onPress={handleOnLike}
                    style={[
                        styles.iconWrapper,
                        hasLiked === true
                            ? styles.btnLike_hasLiked
                            : styles.btnLike_neutral,
                    ]}
                >
                    <MaterialCommunityIcons
                        name={
                            hasLiked === true ? "thumb-up" : "thumb-up-outline"
                        }
                        size={16}
                        color={
                            hasLiked === true ? Colors.plain : Colors.primary
                        }
                    />
                </Pressable>
                <Pressable
                    onPress={handleOnMessage}
                    style={[styles.iconWrapper, { borderColor: Colors.medium }]}
                >
                    <MaterialCommunityIcons
                        name="email-outline"
                        size={16}
                        color={Colors.medium}
                    />
                </Pressable>
                <Pressable
                    onPress={handleOnShare}
                    style={[
                        styles.iconWrapper,
                        { borderColor: Colors.secondary },
                    ]}
                >
                    <MaterialCommunityIcons
                        name="send"
                        size={16}
                        color={Colors.secondary}
                    />
                </Pressable>
            </View>
            <View style={styles.badgesWrapper}>
                {/* <LottieView
                    loop={false}
                    autoPlay={false}
                    source={require("../assets/animations/verified_animated.json")}
                    style={styles.animation}
                    autoSize={false}
                    ref={verifiedAnimation}
                /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    actionsWrapper: {
        flexDirection: "row",
    },
    badgesWrapper: {
        flexDirection: "row",
    },
    btnLike_hasLiked: {
        backgroundColor: Colors.primary,
        borderColor: Colors.transparent,
    },
    btnLike_neutral: {
        borderColor: Colors.primary,
    },
    container: {
        backgroundColor: Colors.plain,
        borderTopColor: Colors.veryLight,
        borderTopWidth: 0.17,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    iconWrapper: {
        alignItems: "center",
        borderRadius: 100,
        borderWidth: 1,
        backgroundColor: Colors.plain,
        height: 35,
        justifyContent: "center",
        marginRight: 10,
        padding: 8,
        width: 35,
    },
});
