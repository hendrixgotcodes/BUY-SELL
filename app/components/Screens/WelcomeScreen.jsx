import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground,
    Image,
    Platform
} from 'react-native'

//Components
import {PrimaryButton, SecondaryButton} from '../Buttons'
import AppText from '../AppText'

//Variables
const backgroundImage = require("../../assets/bgs/background.jpg")
const logo = require("../../assets/logo-red.png")

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.imgBg}>
                <View style={styles.contentWrapper}>
                    <View style={styles.header}>
                        <Image source={logo} style={styles.header_logo} />
                        <AppText>Sell What You Don't Need</AppText>
                    </View>
                    <View style={styles.btnWrapper}>
                        <PrimaryButton caption={"Register"}/>
                        <SecondaryButton caption={"Log In"} />
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
        width: "100%"
    }

})