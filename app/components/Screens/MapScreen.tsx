import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { Location as LocationType } from "../../types/entities";
import React, { useRef, useState } from "react";
import {
    Animated, Platform,
    Pressable, StyleProp, StyleSheet, View, ViewStyle
} from "react-native";

// Assets
import MapView, { Marker } from "react-native-maps";

import Colors from "../../assets/_colors";
import useLocation from "../../hooks/useLocation";

// Components
import AppTextInput from "../AppTextInput";



const DELTA = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

export default function MapScreen({ dismiss, onLocationSelected }:{dismiss: (arg?:any)=>any, onLocationSelected: (arg?:any)=>any}) {
    // useEffect(()=>{
    //     Location.setGoogleApiKey("AIzaSyAkV66qhT6lHIkWcKD7pIbHofxKUvnBTqA")
    // }, [])

    const location = useLocation()
    const [currentLocation, setCurrentLocation] = useState(location);


    const [autoCompleteData, setAutoCompleteData] = useState<{
        location: LocationType,
        city: string|null,
        district: string|null,
        street: string|null
    } []>([]);
    const [map, setMap] = useState<MapView|null>(null);

    const formAnimation = useRef(new Animated.Value(-400)).current;
    const searchBoxAnimation = useRef(new Animated.Value(1500)).current;

    // console.log(formAnimation, searchBoxAnimation);

    const handleOnTextInput = ({ nativeEvent: { text } }:{nativeEvent: {text:any}}) => {
        const locations:{
            location: LocationType,
            city: string|null,
            district: string|null,
            street: string|null
        } [] = [];

        Location.geocodeAsync(text).then((result) => {
            result.map((item) => {
                Location.reverseGeocodeAsync({
                    latitude: item.latitude,
                    longitude: item.longitude,
                }).then((postalAddress) => {
                    const geoLocation = {
                        location: {
                            latitude: item.latitude,
                            longitude: item.longitude,
                        },
                        city: postalAddress[0].city,
                        district: postalAddress[0].district,
                        street: postalAddress[0].street,
                    };

                    locations.push(geoLocation);
                    setAutoCompleteData(locations);
                });
                return null;
            });
        });
    };
    const handleOnAutoCompleteItemPress = (item:any) => {
        setCurrentLocation(item);
        setAutoCompleteData([]);

        onLocationSelected(item);

        // map.animateToRegion({
        //   ...item,
        //   ...DELTA
        // })

        map?.getCamera().then((newCamera) => {
            newCamera.center = { ...item };
            newCamera.zoom = 20;

            map.animateCamera(newCamera);
        });
    };

    const handleSearchBoxOnFocus = () => {
        maximizeForm();
        shrinkSearchBox();
    };

    const maximizeForm = () => {
        Animated.timing(formAnimation, {
            toValue: -50,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const minimizeForm = () => {
        Animated.timing(formAnimation, {
            toValue: -400,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };


    const shrinkSearchBox = () => {
        Animated.timing(searchBoxAnimation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.return}>
                <Pressable onPress={dismiss}>
                    <MaterialCommunityIcons
                        name="chevron-left"
                        size={24}
                        color={Colors.medium}
                    />
                </Pressable>
            </View>

            <Animated.View style={[styles.form, { bottom: formAnimation }]}>
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
                        style={{
                            backgroundColor: Colors.offwhite,
                            flex: searchBoxAnimation,
                        } as unknown as StyleProp<ViewStyle>}
                    />
                    <View style={styles.inputClose}>
                        <MaterialCommunityIcons
                            name="close"
                            size={24}
                            color="black"
                        />
                    </View>
                </View>
            </Animated.View>

            <View style={styles.mapViewWrapper}>
                <MapView
                    // customMapStyle= {mapStyle}
                    initialRegion={{
                        ...currentLocation,
                        ...DELTA,
                    }}
                    ref={(ref) => setMap(ref)}
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
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        // flexDirection: "row"
    },
    form: {
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
    inputClose: {
        alignItems: "center",
        borderRadius: 10,
        height: 47,
        marginRight: "auto",
        backgroundColor: Colors.offwhite,
        flex: 1,
        justifyContent: "center",
    },
    inputWrapper: {
        // position: "absolute",
        // top:  Platform.OS === "android" ? 10 : 30,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        left: 10,
        overflow: "hidden",
        zIndex: 2,
        width: "95%",
    },
    mapViewWrapper: {
        height: "70%",
        width: "100%",
    },
    mapView: {
        width: "100%",
        height: "100%",
    },
    return: {
        alignItems: "center",
        backgroundColor: Colors.plain,
        borderRadius: 10,
        height: 45,
        justifyContent: "center",
        left: 10,
        position: "absolute",
        top: Platform.OS === "ios" ? 50 : 20,
        width: 45,
        zIndex: 3,
    },
});
