import {useEffect} from 'react'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

import expoPushTokensApi from '../api/expoPushTokens'



export default useNotifications = ()=>{

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

}