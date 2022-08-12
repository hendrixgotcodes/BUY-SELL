import * as Location from "expo-location";
import { Location as LocationType } from "../types/entities";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useLocation = () => {
    const [location,setLocation] = useState<LocationType>({
        latitude: 0,
        longitude: 0
    });

    useEffect(() => {
        getUserLocation();
    }, []);

    const getUserLocation = async() => {
        try {
            const response =  await Location.requestForegroundPermissionsAsync()

            if (response.granted !== true) {
                Alert.alert(
                    "Permissions",
                    "Sorry. We need your location service to make this work."
                );
            } else {

                try{
                    const currentPosition = await Location.getCurrentPositionAsync()
                    const {coords} = currentPosition
                    setLocation({latitude: coords.latitude, longitude:coords.longitude})
                }catch(e){
                    Alert.alert(
                        "Error",
                        "Cannot access your location at the moment. Please ensure your location services is turned on"
                    );
                }
                
            }

            
        } catch (error) {
            console.log(error);
        }
    };

    return location;
};

export default useLocation;
