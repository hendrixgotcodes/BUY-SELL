import React from 'react'
import { View, StyleSheet } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

//Components
import ChatScreen from '../Screens/ChatScreen'
import MessagesScreen from '../Screens/MessagesScreen'


const Stack = createStackNavigator()

const getTabBarVisibility = (route)=>{

    const routeName = getFocusedRouteNameFromRoute(route)
    
    return true

}
 
export default function MessageNavigator(navigation) {


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            style={styles.container}
        >
            
            <Stack.Screen 
                name="messages" 
                component={MessagesScreen} 
            />
            <Stack.Screen name="chat" component={ChatScreen} />

        </Stack.Navigator>
    )
}
 
const styles = StyleSheet.create({
    container: {
 
    }
})