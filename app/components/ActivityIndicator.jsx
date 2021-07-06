import React from 'react'

//Components
import LottieView from 'lottie-react-native'
 
export default function ActivityIndicator({visible= false}) {

   if(visible === false){
       return null
   }

    return (
        <LottieView
            autoPlay
            loop
            source={require("../assets/animations/loader.json")}
         />
    )
}
