import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'

//Component
import AppNavigator from './app/components/navigators/AppNavigator'
import AuthNavigator from './app/components/navigators/AuthNavigator'

//Assets
import myTheme from './app/components/navigators/navigationTheme'


export default function App() {

  const NetInfo = useNetInfo()

  return (
      <NavigationContainer theme={myTheme}>
        <AppNavigator />
      </NavigationContainer>

  )
  
}
