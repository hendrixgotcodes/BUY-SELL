import React from 'react'
import { View, StyleSheet } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//Components
import FeedNavigator from './FeedNavigator'
import ListingsScreen from '../Screens/ListingsScreen'
import ListingEditScreen from '../Screens/ListingEditScreen'
import MyAccountScreen from '../Screens/MyAccountScreen'

//Assets
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import Colors from '../../assets/_colors'

//Variable
const Tab = createBottomTabNavigator()

const listingEditScreenOptions = ({color, size})=>({
    tabBarIcon: <Ionicons name="add-circle" color={color} size={size} />
})
const myAccountScreenOptions = ({color, size})=>({
    tabBarIcon: <MaterialCommunityIcons name="account" color={color} size={size} />
})

 
export default function AccountNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: Colors.light,
            }}
        >
            <Tab.Screen 
                name="Feed" 
                component={FeedNavigator}
                options = {{
                    tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="home" color={color} size={size} />
                }}
            />

            <Tab.Screen 
                name="listingEdit" 
                component={ListingEditScreen}
            />

            <Tab.Screen 
                name="Account" 
                component={MyAccountScreen}
                options = {{
                    tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="account" color={color} size={size} />
                }}
            />

        </Tab.Navigator>
    )
}
 
const styles = StyleSheet.create({
    container: {
 
    }
})