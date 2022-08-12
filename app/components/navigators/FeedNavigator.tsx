import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// Components
import ListingDetailsScreen from "../Screens/ListingDetailsScreen";
import ListingsScreen from "../Screens/ListingsScreen";
import SearchScreen from "../Screens/SearchScreen";
import routes from "./routes";
// import ListingDetailNavigator from './ListingDetailNavigator'
// import MessageNavigator from './MessageNavigator'

// Fields
const Stack = createStackNavigator();

export default function FeedNavigator() {
    return (
        <Stack.Navigator
            // mode="modal"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                // mode="modal"
                name="Listings"
                component={ListingsScreen}
            />

            <Stack.Screen
                // mode="modal"
                name={routes.LISTING_DETAILS}
                component={ListingDetailsScreen}
            />

            <Stack.Screen 
                // mode="modal" 
                name="search" 
                component={SearchScreen} 
            />

            {/* <Stack.Screen 
                mode="card" 
                name="Messages" 
                component={MessageNavigator} 
                // options={({route})=>}
            /> */}
        </Stack.Navigator>
    );
}
