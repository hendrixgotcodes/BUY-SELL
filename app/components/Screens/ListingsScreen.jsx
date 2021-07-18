import React, { useEffect} from 'react'
import {  FlatList, Image, Pressable, StatusBar, StyleSheet, View,} from 'react-native'
import {useNetInfo} from '@react-native-community/netinfo'

//Screens
import SafeAreaScreen from './SafeAreaScreen'

//API
import listingsAPI from '../../api/listings'

//Assets
import Colors from '../../assets/_colors'
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import routes from '../navigators/routes'

//Component
import ActivityIndicator from '../ActivityIndicator'
import AppButton from '../AppButton'
import AppText from '../AppText'
import Card from '../Card'

//Hooks
import useAPI from '../../hooks/useAPI'

export default function ListingsScreen({navigation}) {

    
    const {data: listings, hasError, isLoading, request: loadListings} = useAPI(listingsAPI.getListings)
    const NetInfo = useNetInfo()

    useEffect(() => {
        loadListings()

        StatusBar.setBarStyle('dark-content', true)

    }, [])

    // const refresh = ()=>{

    //     setIsRefreshing(true)
    //     loadListings()

    // }



    return (

        <SafeAreaScreen style={styles.container}>

            <View>
                <View style={styles.header}>

                    <Image 
                        style={styles.logo} 
                        color={Colors.medium} 
                        source={require("../../assets/logo-red.png")} 
                    />

                   
                    <View style={styles.messageWrapper}>

                        <Pressable
                            onPress={()=>navigation.navigate("Messages")}
                            hitSlop={20}
                        >

                            <MaterialCommunityIcons 
                                style={styles.messageIcon} 
                                color={Colors.medium} 
                                name="magnify" 
                                size={24} 
                            />

                        </Pressable>

                    </View>


                </View>

                <View style={styles.subHeader}>

                    <View style={{ borderRightWidth: 0.2, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "30%"}}>
                        <MaterialCommunityIcons name="map-marker" size={16} color={Colors.light} />
                        <AppText style={{color: Colors.light, fontSize: 16}}>
                            Ghana
                        </AppText>
                    </View>

                    <View style={{borderRightWidth: 0.2, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "30%"}}>
                        <MaterialCommunityIcons name="tag" size={16} color={Colors.light} />
                        <AppText style={{color: Colors.light, fontSize: 16}}>
                            Category
                        </AppText>
                    </View>

                    <MaterialCommunityIcons name="filter" size={16} color={Colors.light} />

                </View>
            </View>


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
                    // ItemSeparatorComponent = {()=>(
                    //     <ListItemSeperator gap={20} />
                    // )}
                    keyExtractor={(card)=>card.id.toString()}
                    onRefresh={loadListings}
                    refreshing={isLoading}
                    renderItem={
                        ({item})=>(
                            <Card
                                title={item.title}
                                subTitle={"₵"+item.price}
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
    badge:{
        position: "absolute",
        width: 10,
        height: 10,
        top: 0,
        right: 0,
        backgroundColor: Colors.secondary,
        borderRadius: 100
    },
    card: {
        borderRadius: 10,
        marginTop: 20
    },
    container:{
        backgroundColor: Colors.plain
    },
    header:{
        alignItems: "center",
        backgroundColor: Colors.plain,
        display: "flex",
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        paddingHorizontal: 15,
        width: "100%",
    },
    logo:{
        height: 30,
        width: 30
    },
    messageWrapper:{
        position: "absolute",
        right: 10
    },
    subHeader: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderTopWidth: 0.2,
        // borderBottomWidth: 0.2,
        borderColor: Colors.light
    },
    wrapper:{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: Colors.offwhite
    },
})
