import React, {useState, useEffect} from 'react'
import { View, FlatList, StyleSheet} from 'react-native'

//Screens
import SafeAreaScreen from './SafeAreaScreen'

//API
import listingsAPI from '../../api/listings'

//Assets
import Colors from '../../assets/_colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import routes from '../navigators/routes'

//Component
import AppText from '../AppText'
import Card from '../Card'
import ListItemSeperator from '../ListItemSeperator'

export default function ListingsScreen({navigation}) {

    // const listings = [
    //     {
    //         id: 1,
    //         title: "Red jacket for sale",
    //         subTitle: "$100",
    //         image: require("../../assets/img/jacket.jpg")
    //     },
    //     {
    //         id: 2,
    //         title: "Couch in great condition",
    //         subTitle: "$100",
    //         image: require("../../assets/img/couch.jpg")
    //     }
    // ]

    const [listings, setListings] = useState([])

    useEffect(() => {
        loadListings()
    }, [])

    const loadListings = async ()=>{

        const response = await listingsAPI.getListings()
        setListings(response.data)
        // console.log(response.data);
    }

    return (

        <SafeAreaScreen>

            <View style={styles.wrapper}>
                <FlatList
                    data={listings}
                    ItemSeparatorComponent = {()=>(
                        <ListItemSeperator gap={20} />
                    )}
                    keyExtractor={(card)=>card.id.toString()}
                    renderItem={
                        ({item})=>(
                            <Card
                                title={item.title}
                                subTitle={item.price}
                                imageUrl={item.images[0].url}
                                style={styles.card}
                                onPress={()=>{
                                    navigation.navigate(routes.LISTING_DETAILS, item)
                                }}
                            />
                        )
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
            
        </SafeAreaScreen>
        
    )
}

const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal: 15,
        flex: 1
    },
    card: {
        borderRadius: 10,
    }
})
