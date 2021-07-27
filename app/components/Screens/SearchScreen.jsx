import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

//Components
import SafeAreaScreen from './SafeAreaScreen'

//Asset
import Colors from '../../assets/_colors'
import AppTextInput from '../AppTextInput'
import AppMenubar from '../AppMenubar'
import { useState } from 'react'

//API
import listingsAPI from '../../api/listings'

//Hooks
import useAPI from '../../hooks/useAPI'
 
export default function SearchScreen() {

    const [keyword, setKeyword] = useState("Recommended for you")
    const {data: listings, hasError, isLoading, request: loadListings} = useAPI(listingsAPI.getListings)


    return (
        <SafeAreaScreen style={styles.container}>
            
            <View style={styles.textInputWrapper}>
                <AppTextInput
                    placeholder="search..."
                    style={styles.textInput}
                />
            </View>

            <AppMenubar
                items={["All","Cars","Camera", "Clothing", "Furniture", "Games", "Sports"]} 
                onChange={(item)=>{
                    console.log(item);
                }}
            />

            <View>
                <FlatList
                    data={listings}
                    // ItemSeparatorComponent = {()=>(
                    //     <ListItemSeperator gap={20} />
                    // )}
                    // keyExtractor={(card)=>card.id.toString()}
                    onRefresh={loadListings}
                    refreshing={isLoading}
                    renderItem={
                        ({item})=>{ 

                            return (
                            <Card
                                title={item.title}
                                subTitle={"₵"+item.price}
                                imageUrl={item.images[0].url}
                                style={styles.card}
                                onPress={()=>{
                                    navigation.navigate(routes.LISTING_DETAILS, {
                                        'item': item, 
                                        'user': user
                                    })
                                }}
                                thumbnailUrl={item.images[0].thumbnailUrl}
                            />
                        )}
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>


        </SafeAreaScreen>
    )
}
 
const styles = StyleSheet.create({
    appMenubarWrapper:{
        paddingHorizontal: 15,
    },
    container: {
        backgroundColor: Colors.plain
    },
    itemsWrapper:{
        backgroundColor: Colors.offwhite,
        flex: 1
    },
    textInput:{
        backgroundColor: Colors.offwhite
    },
    textInputWrapper:{
        paddingHorizontal: 10,
        marginBottom: 5,
    },
})