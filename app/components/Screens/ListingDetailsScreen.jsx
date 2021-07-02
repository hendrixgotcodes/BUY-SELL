import React from 'react'
import {View, StyleSheet, Platform, SafeAreaView, StatusBar, Image} from 'react-native'

//Components
import AppText from '../AppText'
import Card from '../Card'
import ListItem from '../ListItem'
import SafeAreaScreen from './SafeAreaScreen'

//Assets
import Colors from '../../assets/_colors'

export default function ListingDetailScren({route}){

    const item = route.params
    const image = require("../../assets/img/dp.jpg")

    return(

        // <SafeAreaScreen>

            <View>
                <View style={styles.cardContainer}>
                    <Image style={styles.cardImage} source={item.image} />
                    <View style={styles.captionsWrapper}>
                        <AppText numberOfLines={1}>{item.title}</AppText>
                        <AppText numberOfLines={1}
                            style={{color: Colors.secondary, fontWeight: "bold"}}
                        >
                            {item.subTitle}
                        </AppText>
                    </View>
                </View>
                <ListItem 
                    title="Samuel Opoku Asare"
                    subTitle="5 Listings"
                    image={image}
                    showChevron
                    style={{marginTop: 20}}
                />

            </View>
            
        // {/* </SafeAreaScreen> */}

    )

}

const styles = StyleSheet.create({

    cardContainer: {
        backgroundColor: Colors.plain,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden"
    },
    cardImage:{
        width: "100%",
        height: 400,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    captionsWrapper: {
        display: "flex",
        flexDirection: "column",
        paddingVertical: 10,
        paddingHorizontal: 10
    }

})