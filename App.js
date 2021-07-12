import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'
import AppLoading from 'expo-app-loading'

//Component
import AppNavigator from './app/components/navigators/AppNavigator'
import AuthNavigator from './app/components/navigators/AuthNavigator'
import LoginScreen from './app/components/Screens/LoginScreen'
import NotificationBanner from './app/components/NotificationBanner'

//Assets
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'
import myTheme from './app/components/navigators/navigationTheme'
import navigationRef from './app/components/navigators/rootNavigation'



export default function App() {

  const NetInfo = useNetInfo()
  const [isAppReady, setIsAppReady] = useState(false)
  const [user, setUser] = useState()

 

  const restoreUser = async ()=>{

    const user = await authStorage.getUser()

    if(!user) return
    setUser(user)

  }

  if(!isAppReady){
    return (<AppLoading startAsync={restoreUser} onFinish={()=> setIsAppReady(true)} onError={(error)=>console.log(error)} />)
  }

  return (
      <>
        {
            (NetInfo.isInternetReachable === false && NetInfo.type !== "unknown") && <NotificationBanner /> 
        } 
        {/* <NotificationBanner /> */}
        <AuthContext.Provider value={{user, setUser}}>
          <NavigationContainer ref={navigationRef} theme={myTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </AuthContext.Provider>
      </>
      // <LoginScreen />

  )
  
}
