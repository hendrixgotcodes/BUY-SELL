import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useLocation = () => {
    const [location] = useState();

    useEffect(() => {
        getUserLocation();
    }, []);

    const getUserLocation = () => {
        try {
            Location.requestForegroundPermissionsAsync().then(({ granted }) => {
                if (granted !== true) {
                    Alert.alert(
                        "Permissions",
                        "Sorry. We need your location service to make this work."
                    );
                } else {
                    Location.getCurrentPositionAsync()
                        .then(() => {
                            // setLocation({latitude, longitude})
                            // Location.reverseGeocodeAsync({latitude, longitude})
                            // .then((result)=>{
                            //     console.log(result);
                            // })
                            // console.log({latitude, longitude});
                        })
                        .catch(() => {
                            Alert.alert(
                                "Error",
                                "Cannot access your location at the moment. Please ensure your location services is turned on"
                            );
                        });
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return location;
};

export default useLocation;
