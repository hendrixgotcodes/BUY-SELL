import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";

// Components
import ChatScreen from "../Screens/ChatScreen";
import MessagesScreen from "../Screens/MessagesScreen";

const Stack = createStackNavigator();

export default function MessageNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            style={styles.container}
        >
            <Stack.Screen name="messages" component={MessagesScreen} />
            <Stack.Screen name="chat" component={ChatScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {},
});
