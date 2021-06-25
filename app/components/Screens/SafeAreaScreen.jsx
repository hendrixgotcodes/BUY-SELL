import React from 'react'
import {View, StyleSheet, SafeAreaView, Platform, StatusBar} from  'react-native'

//Assets
import Colors from '../../assets/_colors'

export default function DefaultScreen({children}){

    return(
        <SafeAreaView style={styles.safeArea}>
            {children}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: Colors.offwhite,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})