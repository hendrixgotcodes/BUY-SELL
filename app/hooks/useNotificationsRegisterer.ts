import { Subscription } from "expo-modules-core";
import * as Notifications from "expo-notifications";
import { useContext, useEffect, useRef } from "react";
import { Platform } from "react-native";

import expoPushTokensApi from "../api/expoPushTokens";
import Colors from "../assets/_colors";
import { NotificationsContext } from "../contexts/NotificationsContext";


Notifications.setNotificationHandler({
    handleNotification: async()=>({
        shouldPlaySound: true,
        shouldShowAlert: true,
        shouldSetBadge: true
    })
})

export default function useNotificationsRegisterer(){

    const {setCurrentNotification} = useContext(NotificationsContext)

    const notificationListener = useRef<Subscription>()
    const responseListener = useRef<Subscription>()
    
    useEffect(() => {
        registerForPushNotifications();

        notificationListener.current = Notifications.addNotificationReceivedListener(notification=>{
            setCurrentNotification(notification)
        })

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response=>console.log(response))

        return(()=>{
            notificationListener.current && Notifications.removeNotificationSubscription(notificationListener.current)
            responseListener.current && Notifications.removeNotificationSubscription(responseListener.current)
        })

        // Notifications.addNotificationResponseReceivedListener(() =>
        //     navigation.navigate("Account")
        // );
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permissionResponse =
                await Notifications.getPermissionsAsync();
            if (!permissionResponse.granted) {
                alert("Cannot work without Notification service");
                return;
            }

            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token.data);
            console.log("pushToken: ", token.data);

            if(Platform.OS==="android"){
                Notifications.setNotificationChannelAsync("default", {
                    name: "default",
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0, 250,250,250],
                    lightColor: Colors.primary
                })
            }

            return token.data
            
        } catch (error) {
            console.log(error);
        }
    };
};
