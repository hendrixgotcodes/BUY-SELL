import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import {nanoid} from 'nanoid'

import Colors from "../assets/_colors";
import AppText from "./AppText";

export default function AppMenubar({ items, onChange }:{items:string[], onChange: (item:string)=>void}) {
    const [active, setActive] = useState("All");

    const handleMenuItemOnPress = (item:string) => {
        setActive(item);
        onChange(item);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // style={styles.container}
            >
                {items.map((item) => (
                    <Pressable
                        onPress={() => handleMenuItemOnPress(item)}
                        style={[
                            styles.items,
                            item === active && styles.items_current,
                        ]}
                        key={nanoid(5)}
                    >
                        <AppText
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{
                                color: item === active ? Colors.white : Colors.medium,
                            }}
                            numberOfLines={1}
                        >
                            {item}
                        </AppText>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.transparent,
        borderBottomColor: Colors.offwhite,
        borderTopColor: Colors.offwhite,
        borderWidth: 1,
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    items: {
        alignItems: "center",
        borderColor: Colors.offwhite,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: "center",
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    items_current: {
        backgroundColor: Colors.medium,
    },
});
