import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Animated,
    FlatList,
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from "react-native";

// Components

// Assets
import Colors from "../assets/_colors";
import defaultStyles from "../config/_styles";

type LocationType={
    latitude: number,
    longitude: number
}

interface AppTextInputProps extends TextInputProps{
    autoComplete?: boolean,
    autoCompleteData?: any[],
    onAutoCompleteItemPress?: (arg?:any)=>any,
    icon?: keyof typeof MaterialCommunityIcons.glyphMap,
    style?: StyleProp<ViewStyle>
}

export default function AppTextInput({
    autoComplete = false,
    autoCompleteData,
    onAutoCompleteItemPress,
    icon,
    style,
    ...rest
}:AppTextInputProps) {
    const handleAutoCompleteItemOnPress = (itemLocation:LocationType) => {
        onAutoCompleteItemPress && onAutoCompleteItemPress(itemLocation);
    };

    const autoCompleteItem = (item:any) => (
        <Pressable onPress={() => handleAutoCompleteItemOnPress(item.location)}>
            <View style={styles.autoCompleteItem}>
                <MaterialCommunityIcons name="map-marker" />
                <View style={styles.autoCompleteContentWrapper}>
                    {item.street !== null && (
                        <Text style={{ color: Colors.light }}>
                            {item.street},{" "}
                        </Text>
                    )}
                    {item.city !== null && (
                        <Text style={{ color: Colors.light }}>{item.city}</Text>
                    )}
                    {item.district !== null && (
                        <Text style={{ color: Colors.light }}>
                            , {item.district}
                        </Text>
                    )}
                </View>
            </View>
        </Pressable>
    );

    return (
        <>
            <Animated.View style={[styles.textIputWrapper, style]}>
                {icon && (
                    <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={Colors.medium}
                        style={styles.icon}
                    />
                )}
                <TextInput style={defaultStyles.text} {...rest} />
            </Animated.View>

            {autoComplete == true && (
                <FlatList
                    data={autoCompleteData}
                    renderItem={({ item }) => autoCompleteItem(item)}
                    keyExtractor={(item) => item.street}
                    style={styles.autoCompleteList}
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    autoCompleteItem: {
        width: "100%",
        padding: 10,
        backgroundColor: Colors.plain,
        flexDirection: "row",
        alignItems: "center",
    },
    autoCompleteContentWrapper:{ 
        flexDirection: "row", 
        marginLeft: 5 
    },
    autoCompleteList:{
        borderRadius:20
    },
    textIputWrapper: {
        backgroundColor: Colors.plain,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
    },
});
