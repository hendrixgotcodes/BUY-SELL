import React, { useState } from 'react'
import { FlatList, View, Platform, StyleSheet } from 'react-native'

//Components
import AppText from '../AppText'
import Card from '../Card'
import SafeAreaScreen from './SafeAreaScreen'
import LottieView from 'lottie-react-native'

//hooks
import useRealtime from '../../hooks/useRealtime'

//resources
import auth from '../../api/auth'
import Colors from '../../assets/_colors'
import _userInfo from '../../api/userInfo'
import formatNumber from '../../util/formatNumber'

 
export default function FavoritesScreen() {
    
    const [favorites, setFavorites] = useState([])
    // const currentUser = auth.getCurrentUser()

    // let favorites = useRealtime("favorites", currentUser.uid)
    // favorites = favorites.favorites

    // console.log(favorites);


    return (
        <SafeAreaScreen style={styles.container}>
            
            <View style={styles.header}>

                <AppText style={styles.headerTitle}>
                    Favorites
                </AppText>

            </View>

            <View style={styles.wrapper}>

                {(favorites === undefined || favorites.length === 0) ? (

                    <>
                        <View style={styles.animationWrapper}>
                            <LottieView
                                autoPlay
                                loop={false}
                                source={require("../../assets/animations/favorites.json")} 
                                style={{
                                    width: 300,
                                    height:300,
                                    alignSelf: "center"
                                }}
                            />
                            <AppText style={styles.text}>
                                Your favorite listings will appear here.
                            </AppText>
                        </View>

                        {/* <View style={styles.textWrapper} >
                            <AppText style={styles.text}>
                                Your favorite listings will appear here.
                            </AppText>
                        </View> */}
                    </>

                ):(
                    <>

                        <FlatList
                            data={favorites}
                            // ItemSeparatorComponent = {()=>(
                            //     <ListItemSeperator gap={20} />
                            // )}
                            keyExtractor={(item)=>item.item.id.toString()}
                            // onRefresh={loadListings}
                            // refreshing={isLoading}
                            renderItem={
                                ({item})=>{ 

                                    return (
                                    <Card
                                        title={item.item.title}
                                        subTitle={"₵"+ formatNumber(item.item.price, "currency")}
                                        style={{marginTop: 20}}
                                        imageUrl={item.item.images[0].url}
                                        style={styles.card}
                                        onPress={()=>{
                                            navigation.navigate(routes.LISTING_DETAILS, {
                                                'item': item, 
                                                'user': user
                                            })
                                        }}
                                        thumbnailUrl={item.item.images[0].thumbnailUrl}
                                    />
                                )}
                            }
                            showsVerticalScrollIndicator={false}
                        />

                    </>
                )}

            </View>



        </SafeAreaScreen>
    )
}

// Platform.select({
//     ios:{

//     }
// })
 
const styles = StyleSheet.create({
    animationWrapper:{
        flex:1,
        justifyContent:"center"
    },
    container: {
        backgroundColor: Colors.plain
    },
    header:{
        alignItems: "center",
        backgroundColor: Colors.plain,
        borderBottomWidth: 0.17,
        borderColor: Colors.light,
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        width: "100%",
    },
    headerTitle: {
        textAlign: "center", 
        fontWeight: "bold", 
        fontSize: 24
    },
    text:{
        fontSize: Platform.OS==="android" ? 16 : 20,
        // fontWeight: "bold",
        textAlign: "center"
    },
    textWrapper:{
        bottom: Platform.OS=="android" ? 200 : 100,
        left: "20%",
        position: "absolute",
        ...Platform.select({
            ios: {
                transform: [{translateX: "-135%"}],
                left: "50%",
            }
        })
    },
    wrapper: {
        flex: 1,
        backgroundColor: Colors.offwhite,
        paddingHorizontal: 10
    },
})