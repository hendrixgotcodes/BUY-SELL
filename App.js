import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'

//Component
import AppNavigator from './app/components/navigators/AppNavigator'
import AuthNavigator from './app/components/navigators/AuthNavigator'
import LoginScreen from './app/components/Screens/LoginScreen'
import NotificationBanner from './app/components/NotificationBanner'

//Assets
import myTheme from './app/components/navigators/navigationTheme'
import AuthContext from './app/auth/context'


export default function App() {

  const NetInfo = useNetInfo()
  const [user, setUser] = useState()

  return (
      <>
        {
            (NetInfo.isInternetReachable === false && NetInfo.type !== "unknown") && <NotificationBanner /> 
        } 
        {/* <NotificationBanner /> */}
        <AuthContext.Provider value={{user, setUser}}>
          <NavigationContainer theme={myTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </AuthContext.Provider>
      </>
      // <LoginScreen />

  )
  
}
