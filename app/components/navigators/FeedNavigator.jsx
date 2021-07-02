import React from 'react'
import { View, StyleSheet } from 'react-native'

//Components
import {createStackNavigator} from '@react-navigation/stack'
import ListingsScreen from '../Screens/ListingsScreen'
import ListingDetailsScreen from '../Screens/ListingDetailsScreen'

//Fields
const Stack = createStackNavigator()
 
export default function FeedNavigator() {
    return (
        <Stack.Navigator>

            <Stack.Screen name="Listings" component={ListingsScreen} />
            <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />

        </Stack.Navigator>
    )
}
 
const styles = StyleSheet.create({
    container: {
 
    }
})