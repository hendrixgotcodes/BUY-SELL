import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";

// Components
import ChatScreen from "../Screens/ChatScreen";
import ListingDetailScren from "../Screens/ListingDetailsScreen";
import ViewImageScreen from "../Screens/ViewImageScreen";

const Stack = createStackNavigator();

export default function ListingDetailNavigator() {
    return (
        <Stack.Navigator
            style={styles.container}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="details" component={ListingDetailScren} />
            <Stack.Screen name="chat" component={ChatScreen} />
            <Stack.Screen name="viewImage" component={ViewImageScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {},
});
