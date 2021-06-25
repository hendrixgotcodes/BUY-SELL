import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import WelcomeScreen from './app/components/Screens/WelcomeScreen'
import ViewImageScreen from './app/components/Screens/ViewImageScreen'
import ListingDetailsScreen from './app/components/Screens/ListingDetailsScreen'
import MessagesScreen from './app/components/Screens/MessagesScreen'
import MyAccountScreen from './app/components/Screens/MyAccountScreen'
import ListingsScreen from './app/components/Screens/ListingsScreen'
import SafeAreaScreen from './app/components/Screens/SafeAreaScreen'

//Components
import Button from './app/components/Button'
import Card from './app/components/Card'
import ListItem from './app/components/ListItem'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'


const placeBo = {
    title: "Red jacket for sale!",
    subTitle: "$100",
    image: require('./app/assets/img/jacket.jpg')
}

export default function App() {

  
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <WelcomeScreen /> */}

      {/* <ListingDetailsScreen>
          <Card
            title={placeBo.title}
            subTitle={placeBo.subTitle}
            image={placeBo.image}
          />
          <ListItem style={{marginTop: 10}} />
      </ListingDetailsScreen> */}
      {/* <MessagesScreen /> */}
      {/* <ListingsScreen /> */}
      <SafeAreaScreen>
          {/* <AppTextInput placeholder="username" icon="email" /> */}
          <AppPicker />
      </SafeAreaScreen>

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
    backgroundColor: '#f8f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
