import React from 'react'
import {View, StyleSheet, Pressable, Image as RNImage} from 'react-native'
import {Image} from 'react-native-expo-image-cache'

//Components
import AppText from './AppText'

//Assets
import Colors from '../assets/_colors'

export default function Card({title, subTitle, imageUrl, style, thumbnailUrl, onPress, borderRadius}){

    return(
        <Pressable onPress={onPress}>
            <View style={[styles.container, {...style}]}>
                {/* <Image style={styles.image} source={{uri: imageUrl}} /> */}
                <Image style={styles.image} tint="light" uri={imageUrl} preview={{uri: thumbnailUrl}} />
                <View style={styles.cardFooter}>
                    <View style={styles.captionsWrapper}>
                        <AppText style={{fontWeight: "bold"}} numberOfLines={1}>{title}</AppText>
                        <AppText numberOfLines={1}
                            style={{color: Colors.secondary, fontWeight: "bold"}}
                        >
                            {subTitle}
                        </AppText>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <RNImage
                            source={require("../assets/img/verified.png")}
                            style={styles.badge}
                            
                         />
                    </View>
                </View>
            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({

    badge:{
        width: 23,
        height: 23,
    },
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
    cardFooter:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5
    },
    captionsWrapper: {
        display: "flex",
        flexDirection: "column",
        paddingVertical: 10,
        paddingHorizontal: 10
    }

})