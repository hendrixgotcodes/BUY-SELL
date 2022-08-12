import React, { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";
import {Notification} from 'expo-notifications'

type NotificationContextType={
    currentNotification: Notification|null,
    setCurrentNotification: Dispatch<SetStateAction<Notification|null>> | ((arg?:any)=>void)
}

export const NotificationsContext = createContext<NotificationContextType>({
    currentNotification: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setCurrentNotification:()=>{}
})

export function NotificationsContextProvider({children}:{children:ReactNode}){

    const [currentNotification, setCurrentNotification] = useState<Notification|null>(null)

    const memoisedValue = useMemo(()=>({
        currentNotification,
        setCurrentNotification
    }), [currentNotification])

    return(
        <NotificationsContext.Provider value={{
            currentNotification: memoisedValue.currentNotification,
            setCurrentNotification: memoisedValue.setCurrentNotification
        }}>
            {children}
        </NotificationsContext.Provider>
    )
    
} 