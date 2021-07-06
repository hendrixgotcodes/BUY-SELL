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
                    .then((result)=>{
                        // setLocation({latitude, longitude})

                        // Location.reverseGeocodeAsync({latitude, longitude})
                        // .then((result)=>{
                        //     console.log(result);
                        // })

                        console.log(result);

                        // console.log({latitude, longitude});
                    })
                    .catch((error)=>{
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