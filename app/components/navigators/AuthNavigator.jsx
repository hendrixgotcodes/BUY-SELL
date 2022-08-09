import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// Components
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";

// Fields
const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="loginScreen" component={LoginScreen} />
            <Stack.Screen name="registerScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );
}