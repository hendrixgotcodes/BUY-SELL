import React, {useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

//Components
import AccountNavigator from './AccountNavigator'
import FeedNavigator from './FeedNavigator'
import ListingsScreen from '../Screens/ListingsScreen'
import ListingEditScreen from '../Screens/ListingEditScreen'
import LottieView from 'lottie-react-native'
import NewListingButton from './NewListingButton'


//Assets
import Colors from '../../assets/_colors'
import expoPushTokensApi from '../../api/expoPushTokens'
import {navigate} from './rootNavigation'
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'


//Variable
const Tab = createBottomTabNavigator()

 
export default function AppNavigator() {

    useEffect(() => {
        registerForPushNotifications()

        Notifications.addNotificationResponseReceivedListener((notifications)=>navigate("Account"))
    }, [])

    const registerForPushNotifications = async ()=>{

        try {
            const permissionResponse = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if(!permissionResponse.granted){
                alert("Cannot work without Notification service")
                return
            }

            const token = await Notifications.getExpoPushTokenAsync()
            expoPushTokensApi.register(token.data);
            
        } catch (error) {
            console.log(error);
        }


    }

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
                    tabBarBadge: true,
                    tabBarBadgeStyle: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: Colors.secondary
                    },
                    tabBarBadgeSize: 1
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