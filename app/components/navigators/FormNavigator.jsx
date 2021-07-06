import React from 'react'
import { View, StyleSheet } from 'react-native'

//Components
import {createStackNavigator} from 'react-navigation/stack'
import ListingEditScreen from '../Screens/ListingEditScreen'
import MapScreen from '../Screens/'

const Stack = createStackNavigator()
 
export default function FormNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="listingEditScreen" />
            <Stack.Screen name="mapScreen" />
        </Stack.Navigator>
    )
}
 
const styles = StyleSheet.create({
    container: {
 
    }
})