import React from 'react'
import {View, StyleSheet, Image, Pressable} from 'react-native'

//Components
import AppText from './AppText'

//Assets
import Colors from '../assets/_colors'

export default function Card({title, subTitle, image, style, onPress, borderRadius}){

    return(
        <Pressable onPress={onPress}>
            <View style={[styles.container, {...style}]}>
                <Image style={styles.image} source={image} />
                <View style={styles.captionsWrapper}>
                    <AppText numberOfLines={1}>{title}</AppText>
                    <AppText numberOfLines={1}
                        style={{color: Colors.secondary, fontWeight: "bold"}}
                    >
                        {subTitle}
                    </AppText>
                </View>
            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.plain,
        width: "100%",
        // height: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200,
    },
    captionsWrapper: {
        display: "flex",
        flexDirection: "column",
        paddingVertical: 10,
        paddingHorizontal: 10
    }

})