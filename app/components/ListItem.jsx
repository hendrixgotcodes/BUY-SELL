import React from 'react'
import {View, StyleSheet, Image, Platform} from 'react-native'

//Components
import AppText from './AppText'

//Assets
import Colors from '../assets/_colors'

const placeBo = {
    title: "Mosh Hamedani",
    subTitle: "5 listings",
    image: require("../assets/img/mosh.jpg")
}

export default function ListItem({style, title, subTitle, image}){

    return(
        <View style={[styles.container, {...style}]}>
            <Image style={styles.image} source={image} />
            <View>
                <AppText
                    style={{...Platform.select({
                        ios: {
                            fontSize: 18,
                            fontWeight: "bold"
                        },
                        android:{
                            fontSize: 12,
                            fontWeight: "bold"
                        }
                    })}}
                >
                    {title}
                </AppText>

                <AppText
                    style={{...Platform.select({
                        ios: {
                            fontSize: 16,
                            color: "#6e6969"
                        },
                        android:{
                            fontSize: 12,
                            color: "#6e6969"
                        }
                    })}}
                >
                    {subTitle}
                </AppText>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.plain
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    }

})