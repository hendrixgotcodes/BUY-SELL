import { useNetInfo } from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import AuthContext from "./app/auth/context";

// Component

// Assets
import authStorage from "./app/auth/storage";
import AppNavigator from "./app/components/navigators/AppNavigator";
import AuthNavigator from "./app/components/navigators/AuthNavigator";
import myTheme from "./app/components/navigators/navigationTheme";
import navigationRef from "./app/components/navigators/rootNavigation";
import NotificationBanner from "./app/components/NotificationBanner";
import { NotificationsContextProvider } from "./app/contexts/NotificationsContext";

export default function App() {
    const NetInfo = useNetInfo();
    const [isAppReady, setIsAppReady] = useState(false);
    const [user, setUser] = useState();

    const restoreUser = async () => {
        const user = await authStorage.getUser();

        if (!user) return;
        setUser(user);
    };

    if (!isAppReady) {
        return (
            <AppLoading
                startAsync={restoreUser}
                onFinish={() => setIsAppReady(true)}
                onError={(error) => console.log(error)}
            />
        );
    }

    return (
        <>
            {NetInfo.isInternetReachable === false &&
                NetInfo.type !== "unknown" && <NotificationBanner />}
            {/* <NotificationBanner /> */}
            <NotificationsContextProvider>
                <AuthContext.Provider value={{ user, setUser }}>
                    <NavigationContainer ref={navigationRef} theme={myTheme}>
                        {user ? <AppNavigator /> : <AuthNavigator />}
                    </NavigationContainer>
                </AuthContext.Provider>
            </NotificationsContextProvider>
        </>
        // <ChatScreen />
    );
}
