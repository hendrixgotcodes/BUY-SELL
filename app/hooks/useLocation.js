import {useState, useEffect} from 'react'
import {Alert} from 'react-native'
import * as Location from 'expo-location'

const useLocation = ()=>{

    const [location, setLocation] = useState()

    useEffect(() => {

        getUserLocation()
      
    }, [])

    const getUserLocation = ()=>{

        try {
            
            Location.requestForegroundPermissionsAsync()
            .then(({granted})=>{
                
                if(granted !== true){
                    Alert.alert(
                        "Permissions",
                        "Sorry. We need your location service to make this work."
                    )
                }else{
                    Location.getCurrentPositionAsync()
                    .then((result)=>{
                        // setLocation({latitude, longitude})

                        // Location.reverseGeocodeAsync({latitude, longitude})
                        // .then((result)=>{
                        //     console.log(result);
                        // })

                        // console.log({latitude, longitude});
                    })
                    .catch((error)=>{
                        Alert.alert(
                            "Error",
                            "Cannot access your location at the moment. Please ensure your location services is turned on",
                        )
                    })
                }

            })

        } catch (error) {
            console.log(error);
        }
    

    }

    return location

}

export default useLocation