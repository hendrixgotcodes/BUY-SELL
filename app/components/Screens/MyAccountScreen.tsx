// Screens

// Assets
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import Colors from "../../assets/_colors";
import useAuth from "../../auth/useAuth";

// Component
import AppText from "../AppText";
import ListItem, { MenuListItem } from "../ListItem";
import ListItemSeperator from "../ListItemSeperator";
import SafeAreaScreen from "./SafeAreaScreen";

export default function MyAccountScreen({ navigation }:{navigation:any}) {
    const { user, logOut } = useAuth();

    const listDetails = [
        {
            id: 1,
            description: "My Listings",
            backgroundColor: Colors.primary,
            icon: (
                <MaterialCommunityIcons
                    name="format-list-bulleted"
                    size={20}
                    color={Colors.plain}
                />
            ),
            targetScreen: "My Listings",
        },
        {
            id: 2,
            description: "My Messages",
            backgroundColor: Colors.secondary,
            icon: (
                <MaterialCommunityIcons
                    name="email"
                    size={20}
                    color={Colors.plain}
                />
            ),
            targetScreen: "Messages",
        },
        // {
        //     id:3,
        //     description: "My Messages",
        //     backgroundColor: Colors.secondary,
        //     icon: <MaterialCommunityIcons name="credit-card" size={24} color={Colors.plain} />,
        //     targetScreen: "Messages"
        // },
    ];

    return (
        <SafeAreaScreen style={styles.container}>
            <View style={styles.header}>
                <AppText style={styles.headerTitle as StyleProp<ViewStyle>}>My Account</AppText>
            </View>

            <View style={styles.mainWrapper}>
                <ListItem
                    title="Samuel Opoku Asare"
                    subTitle={user!.email}
                    image={require("../../assets/img/dp.jpg")}
                />

                <View style={styles.listWrapper}>
                    <FlatList
                        data={listDetails}
                        keyExtractor={(items) => items.id.toString()}
                        ItemSeparatorComponent={() => (
                            <ListItemSeperator gap={1} />
                        )}
                        renderItem={({ item }) => (
                            <MenuListItem
                                description={item.description}
                                backgroundColor={item.backgroundColor}
                                icon={item.icon}
                                onPress={() =>
                                    navigation.navigate(item.targetScreen)
                                }
                            />
                        )}
                    />
                </View>

                <MenuListItem
                    description="Settings"
                    backgroundColor={Colors.medium}
                    icon={
                        <MaterialCommunityIcons
                            name="cog"
                            size={20}
                            color={Colors.plain}
                        />
                    }
                    onPress={logOut}
                />
                <ListItemSeperator gap={1} />
                <MenuListItem
                    description="Log Out"
                    backgroundColor={Colors.complementary}
                    icon={
                        <MaterialCommunityIcons
                            name="logout"
                            size={20}
                            color={Colors.plain}
                        />
                    }
                    onPress={logOut}
                />
            </View>
        </SafeAreaScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.plain,
    },
    listWrapper: {
        marginTop: 30,
        marginBottom: 15,
    },
    header: {
        alignItems: "center",
        backgroundColor: Colors.plain,
        borderColor: Colors.light,
        borderBottomWidth: 0.17,
        display: "flex",
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        paddingHorizontal: 15,
        width: "100%",
    },
    mainWrapper: {
        backgroundColor: Colors.offwhite,
        flex: 1,
    },
    headerTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24,
    },
});
