import React from 'react'
import {View, StyleSheet, Image, Platform} from 'react-native'

//Components
import AppText from './AppText'

const placeBo = {
    title: "Mosh Hamedani",
    subTitle: "5 listings",
    image: require("../assets/img/mosh.jpg")
}

export default function ListItem(){

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={placeBo.image} />
            <View>
                <AppText
                    style={{...Platform.select({
                        ios: {
                            fontSize: 18
                        },
                        android:{
                            fontSize: 12
                        }
                    })}}
                >
                    {placeBo.title}
                </AppText>

                <AppText
                    style={{...Platform.select({
                        ios: {
                            fontSize: 16
                        },
                        android:{
                            fontSize: 12
                        }
                    })}}
                >
                    {placeBo.subTitle}
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
        paddingHorizontal: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    }

})