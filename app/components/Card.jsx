import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

//Components
import AppText from './AppText'

//Assets
import Colors from '../assets/_colors'

export default function Card({title, subTitle, image, style}){

    return(
        <View style={[styles.container, style]}>
            <Image style={styles.image} source={image} />
            <View style={styles.captionsWrapper}>
                <AppText>{title}</AppText>
                <AppText
                    style={{color: Colors.secondary, fontWeight: "bold"}}
                >
                    {subTitle}
                </AppText>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.plain,
        width: "100%",
        // height: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    image: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    captionsWrapper: {
        display: "flex",
        flexDirection: "column",
        paddingVertical: 10,
        paddingHorizontal: 10
    }

})