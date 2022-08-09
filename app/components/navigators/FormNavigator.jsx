import React from "react";

// Components
import { createStackNavigator } from "react-navigation/stack";


const Stack = createStackNavigator();

export default function FormNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="listingEditScreen" />
            <Stack.Screen name="mapScreen" />
        </Stack.Navigator>
    );
}
