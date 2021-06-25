import React from 'react'
import { View, FlatList, StyleSheet} from 'react-native'

//Screens
import SafeAreaScreen from './SafeAreaScreen'

//Assets
import Colors from '../../assets/_colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Component
import AppText from '../AppText'
import Card from '../Card'
import ListItemSeperator from '../ListItemSeperator'

export default function ListingsScreen() {

    const listings = [
        {
            id: 1,
            title: "Red jacket for sale",
            subTitle: "$100",
            image: require("../../assets/img/jacket.jpg")
        },
        {
            id: 2,
            title: "Couch in great condition",
            subTitle: "$100",
            image: require("../../assets/img/couch.jpg")
        }
    ]

    return (

        <SafeAreaScreen>

            <View style={styles.wrapper}>
                <FlatList
                    data={listings}
                    keyExtractor={(card)=>card.id.toString()}
                    ItemSeparatorComponent = {()=>(
                        <ListItemSeperator gap={20} />
                    )}
                    renderItem={
                        ({item})=>(
                            <Card
                                title={item.title}
                                subTitle={item.subTitle}
                                image={item.image}
                                style={styles.card}
                            />
                        )
                    }
                />
            </View>
            
        </SafeAreaScreen>
        
    )
}

const styles = StyleSheet.create({
    wrapper:{
        padding: 15
    },
    card: {
        borderRadius: 10
    }
})
