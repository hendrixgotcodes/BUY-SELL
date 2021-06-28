import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import LoginScreen from './app/components/Screens/LoginScreen'
import RegisterScreen from './app/components/Screens/RegisterScreen'
import ListingEditScreen from './app/components/Screens/ListingEditScreen'
import ListingsScreen from './app/components/Screens/ListingsScreen'
import MessagesScreen from './app/components/Screens/MessagesScreen'


export default function App() {

  
  return <MessagesScreen />;
}
