import React from 'react'
import { View, StyleSheet } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack' 

const Stack = createStackNavigator()

//Components
import ChatScreen from '../Screens/ChatScreen'
import ListingDetailScren from '../Screens/ListingDetailsScreen'
import ViewImageScreen from '../Screens/ViewImageScreen'

 
export default function ListingDetailNavigator({route}) {

    return (
        <Stack.Navigator style={styles.container}
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen name="details" component={ListingDetailScren} />
            <Stack.Screen name="chat" component={ChatScreen} />
            <Stack.Screen name="viewImage" component={ViewImageScreen} />

        </Stack.Navigator>
    )

}
 
const styles = StyleSheet.create({
    container: {
 
    }
})