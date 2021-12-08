import React, { useEffect } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground,
    Image,
    Platform,
    StatusBar
} from 'react-native'

//Components
import AppText from '../AppText'
import AppButton from  '../AppButton'

//Assets
import Colors from '../../assets/_colors'

//Variables
const backgroundImage = require("../../assets/bgs/background.jpg")
const logo = require("../../assets/logo.png")


export default function WelcomeScreen({navigation}) {

    useEffect(()=>{

        StatusBar.setBarStyle('dark-content')

    },[])

    const handleLoginOnClick = ()=>{
        navigation.navigate("loginScreen")
    }

    const handleRegisterOnClick = ()=>{
        navigation.navigate("registerScreen")
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.imgBg} blurRadius={Platform.OS === "android" ? 2 : 20}>
                <View style={styles.contentWrapper}>
                    <View style={styles.header}>
                        <Image source={logo} style={styles.header_logo} />
                        <AppText>Sell What You Don't Need</AppText>
                    </View>
                    <View style={styles.btnWrapper}>
                        <AppButton title="login" style={{marginBottom: 20}} onPress={handleLoginOnClick} />
                        <AppButton title="register" style={{marginBottom: 20, backgroundColor: Colors.secondary}} onPress={handleRegisterOnClick} />
                    </View>
                    </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%"
    },
    imgBg: {
        width: "100%",
        height: "100%",
    },
    header: {
    //    justifySelf: "flex-start",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%",
    },
    header_logo:{
        height: 95,
        width: 95,
    },
    contentWrapper: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
    },
    btnWrapper: {
        width: "90%"
    },

})