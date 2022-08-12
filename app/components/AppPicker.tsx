import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

// Components
import { FlatGrid } from "react-native-super-grid";

import Colors from "../assets/_colors";
import AppButton from "./AppButton";
import AppText from "./AppText";
import Icon from "./Icon";
import SafeAreaScreen from "./Screens/SafeAreaScreen";

type CategoryItemType={
    backgroundColor: string,
    width: number,
    iconName: keyof typeof MaterialCommunityIcons.glyphMap,
    color: string,
    iconSize: number,
    label: string,
    value: number,
}

type AppPickerType={
    icon?: keyof typeof MaterialCommunityIcons.glyphMap,
    onSelectItem: (item: CategoryItemType)=>void,
    items: any[],
    onBlur: ()=>void,
    placeholder?: string,
    selectedItem: CategoryItemType,
    style: StyleProp<ViewStyle>,
}

export default function AppPicker({
    icon,
    items,
    onBlur,
    onSelectItem,
    placeholder,
    selectedItem,
    style,
    ...rest
}:AppPickerType) {
    const [selected, setSelected] = useState<CategoryItemType|null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const textColor = !selected ? styles.text : styles.text_selected;

    const submitItem = (item:CategoryItemType) => ({
        label: item.label,
        value: item.value,
    });

    return (
        <>
            <Pressable onPress={() => setIsModalVisible(true)}>
                <View style={[styles.container, { ...style as object }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name={icon}
                            size={20}
                            color={Colors.medium}
                        />
                    )}
                    <AppText numberOfLines={1} style={textColor}>
                        {selected ? selected.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={Colors.medium}
                    />
                </View>
            </Pressable>
            <Modal visible={isModalVisible} animationType="slide">
                <SafeAreaScreen style={{}}>
                    <View
                        style={styles.wrapper}
                    >
                        <AppButton
                            title="close"
                            onPress={() => {
                                setIsModalVisible(false);
                                onBlur();
                            }}
                        />

                        <FlatGrid
                            data={items}
                            spacing={0}
                            keyExtractor={(item) => item.value.toString()}
                            renderItem={({ item }) => (
                                <Pressable
                                    onPress={() => {
                                        submitItem(item)
                                        setSelected(item);
                                        setIsModalVisible(false);
                                        submitItem(item)
                                        onSelectItem(item);
                                    }}
                                >
                                    <Icon
                                        backgroundColor={item.backgroundColor}
                                        width={item.width}
                                        iconName={item.iconName}
                                        color={item.color}
                                        iconSize={item.iconSize}
                                        text={item.label}
                                    />
                                </Pressable>
                            )}
                        />
                    </View>
                </SafeAreaScreen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
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
    text: {
        flex: 1,
        color: Colors.light,
    },
    text_selected: {
        flex: 1,
        color: Colors.dark,
    },
    wrapper:{
        paddingHorizontal: 15,
        flex: 1,
        // overflow: "hidden",
    }
});
