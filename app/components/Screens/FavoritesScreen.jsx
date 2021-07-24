import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'

//Components
import AppText from '../AppText'
import SafeAreaScreen from './SafeAreaScreen'
import LottieView from 'lottie-react-native'
import Colors from '../../assets/_colors'

 
export default function FavoritesScreen() {
    return (
        <SafeAreaScreen style={styles.container}>
            
            <View style={styles.header}>

                <AppText style={styles.headerTitle}>
                    Favorites
                </AppText>

            </View>

            <View style={styles.wrapper}>

                <View style={styles.animationWrapper}>
                    <LottieView
                        autoPlay
                        loop={false}
                        source={require("../../assets/animations/favorites.json")} 
                        style={styles.animation}
                    />
                </View>

                <View style={styles.textWrapper} >
                    <AppText style={styles.text}>
                        Your favorite listings will appear here.
                    </AppText>
                </View>

            </View>



        </SafeAreaScreen>
    )
}

// Platform.select({
//     ios:{

//     }
// })
 
const styles = StyleSheet.create({
    animationWrapper:{
        flex: 1
    },
    container: {
        backgroundColor: Colors.plain
    },
    header:{
        alignItems: "center",
        backgroundColor: Colors.plain,
        borderBottomWidth: 0.17,
        borderColor: Colors.light,
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        width: "100%",
    },
    headerTitle: {
        textAlign: "center", 
        fontWeight: "bold", 
        fontSize: 24
    },
    text:{
        fontSize: Platform.OS==="android" ? 16 : 20,
        // fontWeight: "bold",
        textAlign: "center"
    },
    textWrapper:{
        bottom: Platform.OS=="android" ? 200 : 100,
        left: "20%",
        position: "absolute",
        ...Platform.select({
            ios: {
                transform: [{translateX: "-135%"}],
                left: "50%",
            }
        })
    },
    wrapper: {
        flex: 1,
        backgroundColor: Colors.offwhite
    },
})