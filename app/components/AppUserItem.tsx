import { MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import {
    Image,
    ImageSourcePropType,
    Platform,
    StyleProp,
    StyleSheet,
    TouchableHighlight,
    View,
    ViewStyle,
} from "react-native";

// Components
import { Swipeable } from "react-native-gesture-handler";

import Colors from "../assets/_colors";
import AppText from "./AppText";

// Assets

type AppUserItemProps={
    style?: StyleProp<ViewStyle>,
    title: string,
    subTitle: string,
    image: ImageSourcePropType,
    onPress?: (arg?:any)=>any,
    renderRightActions?: (arg?:any)=>any,
    showChevron?: boolean,
    numberOfLines?: number
}

export default function AppUserItem({
    style,
    title: fullName,
    subTitle: totalListings,
    image,
    onPress,
    renderRightActions,
    showChevron,
    numberOfLines=1,
}:AppUserItemProps) {
    const verifiedAnimation = useRef<LottieView|null>(null);

    useEffect(() => {
        if (verifiedAnimation.current) {
            setTimeout(() => {
                verifiedAnimation.current?.play();
            }, 1000);
        }
    }, []);

    if (numberOfLines !== undefined && typeof numberOfLines !== "number") {
        throw new Error("property 'numberOfLines' must be a JavaScript Number");
    }

    return (
        <Swipeable
            renderRightActions={renderRightActions}
            overshootFriction={20}
            friction={1.5}
        >
            <TouchableHighlight onPress={onPress} activeOpacity={0.96}>
                <View style={[styles.container, { ...style as object }]}>
                    <Image style={styles.figure} source={image} />
                    <View style={styles.contentWrapper}>
                        <View
                            style={styles.figWrapper}
                        >
                            <AppText
                                numberOfLines={
                                    numberOfLines >= 1 ? numberOfLines : 1
                                }
                                style={{
                                    ...Platform.select({
                                        ios: {
                                            fontSize: 18,
                                            fontWeight: "bold",
                                        },
                                        android: {
                                            fontSize: 12,
                                            fontWeight: "bold",
                                        },
                                    }) as StyleProp<ViewStyle> as object,
                                }}
                            >
                                {fullName}
                            </AppText>

                            <LottieView
                                loop={false}
                                autoPlay={false}
                                source={require("../assets/animations/verified_animated.json")}
                                style={styles.badge}
                                autoSize={false}
                                ref={verifiedAnimation}
                            />
                        </View>

                        <AppText
                            numberOfLines={2}
                            style={{
                                ...Platform.select({
                                    ios: {
                                        fontSize: 16,
                                        color: "#6e6969",
                                    },
                                    android: {
                                        fontSize: 12,
                                        color: "#6e6969",
                                    },
                                }) as StyleProp<ViewStyle> as object,
                            }}
                        >
                            {totalListings}
                        </AppText>
                    </View>
                    {showChevron && (
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={24}
                            color={Colors.light}
                        />
                    )}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    badge: {
        width: 22,
        height: 22,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        // width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.plain,
    },
    contentWrapper:{ 
        flex: 1 
    },
    figure: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10,
    },
    figWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
