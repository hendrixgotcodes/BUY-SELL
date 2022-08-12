import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactChild } from "react";
import {
    Image,
    ImageSourcePropType,
    Platform,
    Pressable,
    StyleProp,
    StyleSheet,
    TouchableHighlight,
    View,
    ViewStyle,
} from "react-native";

// Components
import { Swipeable } from "react-native-gesture-handler";

// Assets
import Colors from "../assets/_colors";
import AppText from "./AppText";


type ListItemPropType ={
    style?: StyleProp<ViewStyle>,
    title: string,
    subTitle: string,
    image: ImageSourcePropType,
    onPress?: (arg?:any)=>any,
    renderRightActions?: (arg?:any)=>any,
    showChevron?: boolean,
    numberOfLines?: number,
}

type MenuListItemPropType={
    icon: ReactChild, 
    description: string, 
    backgroundColor: string, 
    onPress?: (arg?:any)=>any
}

export default function ListItem({
    style,
    title,
    subTitle,
    image,
    onPress,
    renderRightActions,
    showChevron=false,
    numberOfLines,
}:ListItemPropType) {
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
                    <View style={styles.fullHeight}>
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
                            {title}
                        </AppText>

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
                            {subTitle}
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

export function MenuListItem({ icon, description, backgroundColor, onPress }:MenuListItemPropType) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <View style={[styles.figWrapper, { backgroundColor }]}>
                    {icon}
                </View>

                <AppText
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
                    {description}
                </AppText>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.plain,
    },
    figure: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10,
    },
    figWrapper: {
        width: 35,
        height: 35,
        borderRadius: 100,
        marginRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    fullHeight: { 
        flex: 1 
    }
});
