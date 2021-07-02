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
                        "Sorry, we need location permissions to make this work!"
                    )
                }else{
                    Location.getCurrentPositionAsync()
                    .then(({coords: {latitude, longitude}})=>{
                        setLocation({latitude, longitude})
                        console.log("latitude", latitude, " longitude:",longitude);
                    })
                    .catch((error)=>{
                        console.log(error);
                        Alert.alert(
                            "Error",
                            "Sorry, Failed to access location services",
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