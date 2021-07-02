import React from 'react'
import { View, StyleSheet } from 'react-native'

//Components
import {createStackNavigator} from '@react-navigation/stack'
import ListingsScreen from '../Screens/ListingsScreen'
import ListingDetailsScreen from '../Screens/ListingDetailsScreen'

//Fields
const Stack = createStackNavigator()
import routes from './routes'
 
export default function FeedNavigator() {
    return (
        <Stack.Navigator 
            mode="modal"
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen name="Listings" component={ListingsScreen} />

            <Stack.Screen 
                name={routes.LISTING_DETAILS} 
                component={ListingDetailsScreen} 
            />

        </Stack.Navigator>
    )
}