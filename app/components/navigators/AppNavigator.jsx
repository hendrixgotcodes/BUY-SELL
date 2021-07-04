import React from 'react'
import { View, StyleSheet } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//Components
import AccountNavigator from './AccountNavigator'
import FeedNavigator from './FeedNavigator'
import ListingsScreen from '../Screens/ListingsScreen'
import ListingEditScreen from '../Screens/ListingEditScreen'
import NewListingButton from './NewListingButton'


//Assets
import Colors from '../../assets/_colors'
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'


//Variable
const Tab = createBottomTabNavigator()

 
export default function AppNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions = {{
                labelStyle: {
                    fontSize: 14,
                },
                style:{
                    // height: "9%"
                    justifyContent: "center",
                    alignItems: "center"
                },
                allowFontScaling: true
            }}
        >
            <Tab.Screen 
                name="Feed" 
                component={FeedNavigator}
                options = {{
                    tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="home" color={color} size={size} />,
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }
                }}
            />

            <Tab.Screen 
                name="listingEdit" 
                component={ListingEditScreen}
                options = {({navigation})=>(
                    {
                       tabBarButton: ()=><NewListingButton onPress={()=>navigation.navigate("listingEdit")} />,
                    }
                )}
            />

            <Tab.Screen 
                name="Account" 
                component={AccountNavigator}
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