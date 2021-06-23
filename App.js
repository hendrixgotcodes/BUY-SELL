import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import WelcomeScreen from './app/components/Screens/WelcomeScreen'
import ViewImageScreen from './app/components/Screens/ViewImageScreen'

//Components
import Button from './app/components/Button'


export default function App() {

  

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <WelcomeScreen />

      {/* <Button>
       LOGIN
      </Button> */}

      {/* <ViewImageScreen /> */}
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
