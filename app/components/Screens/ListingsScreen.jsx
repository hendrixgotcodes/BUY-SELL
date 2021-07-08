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
import ActivityIndicator from '../ActivityIndicator'
import AppButton from '../AppButton'
import AppText from '../AppText'
import Card from '../Card'
import ListItemSeperator from '../ListItemSeperator'

//Hooks
import useAPI from '../../hooks/useAPI'

export default function ListingsScreen({navigation}) {

    

    const {data: listings, hasError, isLoading, request: loadListings} = useAPI(listingsAPI.getListings)

    useEffect(() => {
        loadListings()
    }, [])


    return (

        <SafeAreaScreen>

            <View style={styles.wrapper}>

                {hasError===true &&
                    (<View style={{height: "100%", justifyContent: "center", textAlign: "center"}}>
                        <AppText style={{textAlign: "center", marginBottom: 20}}>Couldn't retrieve the listings</AppText>
                        <AppButton title="Retry" onPress={loadListings} />
                    </View>)
                }

                <ActivityIndicator visible={isLoading} />

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
                                thumbnailUrl={item.images[0].thumbnailUrl}
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
