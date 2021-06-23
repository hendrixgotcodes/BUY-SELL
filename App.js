import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import WelcomeScreen from './app/components/WelcomeScreen'
import ViewImageScreen from './app/components/ViewImageScreen'

//Hooks
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'


export default function App() {

console.log(useDeviceOrientation());
  

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
