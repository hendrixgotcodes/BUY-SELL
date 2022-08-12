import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

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
        >
            <Stack.Screen name="messages" component={MessagesScreen} />
            <Stack.Screen name="chat" component={ChatScreen} />
        </Stack.Navigator>
    );
}
