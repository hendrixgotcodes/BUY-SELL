import React from 'react'
import {View, StyleSheet} from 'react-native'

//Components
import AppText from '../AppText'

//Assets
import Colors from '../../assets/_colors'

export default function ErrorMessage({message, style}){

    if(!message) return null

    return(

        <AppText style={styles.appText}>
            {message}
        </AppText>

    )

}

const styles = StyleSheet.create({
    appText:{
        fontSize: 16,
        color: Colors.danger
    }
})