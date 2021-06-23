import React from 'react'
import {View, StyleSheet, Platform, SafeAreaView, StatusBar} from 'react-native'

//Assets
import Colors from '../../assets/_colors'

export default function ListingDetailScren({children}){

    return(

        <View style={styles.container}>
            {/* <SafeAreaView style={styles.safeArea}> */}
                {children}
            {/* </SafeAreaView> */}
        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.offwhite,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column"
    },
    safeArea:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column"
    }

})