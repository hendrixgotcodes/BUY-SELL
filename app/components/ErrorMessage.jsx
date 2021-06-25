import React from 'react'
import {View, StyleSheet} from 'react-native'

//Components
import AppText from './AppText'

//Assets
import Colors from '../assets/_colors'

export default function ErrorMessage({message}){

    if(!message) return null

    return(

        <AppText style={styles.errorMessage}>
            {message}
        </AppText>

    )

}

const styles = StyleSheet.create({
    errorMessage:{
        color: Colors.danger
    }
})