import React, {useRef, useEffect, useState} from 'react'
import {Animated, View, StyleSheet, Dimensions, Platform, Pressable } from 'react-native'

//Assets
import Colors from '../../assets/_colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Components
import AppTextInput from '../AppTextInput'
import * as Location from 'expo-location'
import MapView, { AnimatedRegion, Marker} from 'react-native-maps'
import SafeAreaScreen from './SafeAreaScreen'


const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

const DELTA = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}


export default function MapScreen({dismiss, onLocationSelected}) {

    // useEffect(()=>{
    //     Location.setGoogleApiKey("AIzaSyAkV66qhT6lHIkWcKD7pIbHofxKUvnBTqA")
    // }, [])

    const [currentLocation, setCurrentLocation] = useState({
        "latitude": 5.647746557375088,
        "longitude": -0.08263701573021955,
    })

    const [autoCompleteData, setAutoCompleteData] = useState([])
    const [map, setMap] = useState(null)

    const formAnimation = useRef(new Animated.Value(-400)).current
    const searchBoxAnimation = useRef(new Animated.Value(1500)).current

    // console.log(formAnimation, searchBoxAnimation);

    const handleOnTextInput = ({nativeEvent: {text}})=>{

       const locations = []
    
        Location.geocodeAsync(text)
        .then((result)=>{

            result.map((item)=>{
                Location.reverseGeocodeAsync({"latitude":item.latitude, "longitude":item.longitude})
                .then((postalAddress)=>{

                  const geoLocation = {
                    location:{
                      "latitude": item.latitude,
                      "longitude": item.longitude
                    },
                    city: postalAddress[0].city,
                    district: postalAddress[0].district,
                    street: postalAddress[0].street
                  }

                  locations.push(geoLocation)
                  setAutoCompleteData(locations)
                })
                return null
            })

        })

    }
    const handleOnAutoCompleteItemPress = (item)=>{

      setCurrentLocation(item)
      setAutoCompleteData([])

      onLocationSelected(item)

      // map.animateToRegion({
      //   ...item,
      //   ...DELTA
      // })

      map.getCamera()
      .then((newCamera)=>{

        newCamera.center = {...item}
        newCamera.zoom = 20

        map.animateCamera(newCamera, 1000)

      })


    }

    const handleSearchBoxOnFocus = ()=>{

      maximizeForm()
      shrinkSearchBox()

    }

    const maximizeForm = ()=>{

        Animated.timing(formAnimation,{
          toValue: -50,
          duration: 300,
          useNativeDriver: false
        }).start()

    }

    const minimizeForm = ()=>{
      Animated.timing(formAnimation,{
        toValue: -400,
        duration: 300,
        useNativeDriver: false
      }).start()
    }

    const maximizeSearchBox = ()=>{

        Animated.timing(searchBoxAnimation, {
          toValue: 1500,
          duration: 300,
          useNativeDriver: false
        })

    }

    const shrinkSearchBox = ()=>{

        Animated.timing(searchBoxAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        })

    }

    return (
            <View style={styles.container}>

                  <View style={styles.return}>
                      <Pressable onPress={dismiss}>
                        <MaterialCommunityIcons name="chevron-left" size={24} color={Colors.medium} />
                      </Pressable>
                  </View>

                <Animated.View style={[styles.form, {bottom: formAnimation}]}>
                  <View style={styles.inputWrapper}>
                      <AppTextInput
                          autoComplete={true}
                          autoCompleteData={autoCompleteData}
                          autoCompleteType="street-address"
                          icon="map-search"
                          onBlur={minimizeForm}
                          onFocus={handleSearchBoxOnFocus}
                          onSubmitEditing={handleOnTextInput}
                          onAutoCompleteItemPress={handleOnAutoCompleteItemPress}
                          placeholder="Search city, town, etc"
                          placeholderTextColor={Colors.light}
                          style={{backgroundColor: Colors.offwhite, flex: searchBoxAnimation}}
                      />
                      <View style={styles.inputClose}>
                        <MaterialCommunityIcons name="close" size={24} color="black" />
                      </View>
                  </View>
                </Animated.View>

                <View style={styles.mapViewWrapper}>
                    <MapView 
                        // customMapStyle= {mapStyle}
                        initialRegion={{
                            ...currentLocation,
                            ...DELTA
                        }}
                        ref={ref=> (setMap(ref))}
                        showsUserLocation={true}
                        style={styles.mapView}
                        userLocationAnnotationTitle="You"
                        userLocationCalloutEnabled={true}
                    >
                        <Marker
                            draggable
                            coordinate={currentLocation}
                            // onDragEnd={(e) => console.log({ x: e.nativeEvent.coordinate })}
                        />
                    </MapView>
                </View>

            </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        // flexDirection: "row"
    },
    form:{
      // bottom: -400,
      position: "absolute",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      left: 0,
      height: "90%",
      width: "100%",
      backgroundColor: Colors.plain,
      zIndex: 2,
    },
    inputClose:{
      alignItems: "center",
      borderRadius: 10,
      height: 47,
      marginRight: "auto",
      backgroundColor: Colors.offwhite,
      flex: 1,
      justifyContent: "center", 
    },
    inputWrapper:{
        // position: "absolute",
        // top:  Platform.OS === "android" ? 10 : 30,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        left: 10,
        overflow: "hidden",
        zIndex: 2,
        width: "95%"
    },
    mapViewWrapper:{
        height: "70%",
        width: "100%"
    },
    mapView:{
        width: "100%",
        height: "100%"
    },
    return:{
      alignItems: "center",
      backgroundColor: Colors.plain,
      borderRadius: 10,
      height: 45,
      justifyContent: "center",
      left: 10,
      position: "absolute",
      top: Platform.OS==="ios" ? 50 : 20,
      width: 45,
      zIndex: 3,
    }
})