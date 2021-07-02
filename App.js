import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'

//Component
import AppNavigator from './app/components/navigators/AppNavigator'
import AuthNavigator from './app/components/navigators/AuthNavigator'

//Assets
import myTheme from './app/components/navigators/navigationTheme'


export default function App() {

  return (
      <NavigationContainer theme={myTheme}>
        <AppNavigator />
      </NavigationContainer>

  )
  
}
