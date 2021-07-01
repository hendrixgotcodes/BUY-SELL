import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Permissions from 'expo-permissions'

//Screens
import SafeAreaScreen from './app/components/Screens/SafeAreaScreen'

//Components
import AppImageInput from './app/components/AppImageInput'
import ImageInputList from './app/components/ImageInputList'

const data=[
  {
    backgroundColor: "#fc5c65",
    width: 60,
    iconName: "floor-lamp",
    color: "#fff",
    iconSize: 25,
    label: "Furniture",
    value: 1
  },
  {
    backgroundColor: "#fd9644",
    width: 60,
    iconName: "car",
    color: "#fff",
    iconSize: 25,
    label: "Cars",
    value: 2
  },
  {
    backgroundColor: "#fed330",
    width: 60,
    iconName: "camera",
    color: "#fff",
    iconSize: 25,
    label: "Cameras",
    value: 3
  },
  {
    backgroundColor: "#26de81",
    width: 60,
    iconName: "cards",
    color: "#fff",
    iconSize: 25,
    label: "Games",
    value: 4
  },
  {
    backgroundColor: "#2bcbba",
    width: 60,
    iconName: "shoe-heel",
    color: "#fff",
    iconSize: 25,
    label: "Clothing",
    value: 5
  },
  {
    backgroundColor: "#45aaf2",
    width: 60,
    iconName: "basketball",
    color: "#fff",
    iconSize: 25,
    label: "Sports",
    value: 6
  },
  {
    backgroundColor: "#4b7bec",
    width: 60,
    iconName: "headset",
    color: "#fff",
    iconSize: 25,
    label: "Movies & Others",
    value: 7
  },
]

const onChangeURI = (uri)=>{
  console.log(uri);
}

export default function App() {

  const [URIs, setImageURIs] = useState([])

  const handleOnRemoveImage = (item)=>{

      let uris = URIs.filter(uriItem => uriItem !== item)
      setImageURIs(uris)
      
  }

  const handleOnAddURI = uri=>{
        setImageURIs(
            [...URIs,
                uri
            ]
        )
  }
  
  
  return (
    
      <SafeAreaScreen>

          {/* <View>
            <AppImageInput onChangeImage={onChangeURI} />
          </View> */}
          <ImageInputList
            imageURIs = {URIs}
            onRemoveURI={handleOnRemoveImage}
            onAddURI = {handleOnAddURI}
           />

      </SafeAreaScreen>

  );
  
}
