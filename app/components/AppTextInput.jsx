import React from 'react'
import {Animated, View, StyleSheet, TextInput, Platform, FlatList, Text, Pressable} from 'react-native'

//Components
import AppText from './AppText'

//Assets
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Colors from '../assets/_colors'
import defaultStyles from '../config/_styles'

const data=[
    {
        location: {
            latitude: 5.50500005,
            longitude: -2.9920020
        },
        street:"Spintex Road",
        city: "Accra",
        district: "Accra International Airpot"
    },
    {
        location: {
            latitude: 5.50500005,
            longitude: -2.9920020
        },
        street:"Kweidonu Road",
        city: "Tema",
        district: "Tema Municipal"
    },
]



export default function AppTextInput({autoComplete=false, autoCompleteData, onAutoCompleteItemPress, icon, style, ...rest}){

    const handleAutoCompleteItemOnPress = (itemLocation)=>{
         onAutoCompleteItemPress(itemLocation)
    }

    const autoCompleteItem = (item)=>{

        return (
            <Pressable onPress={()=>handleAutoCompleteItemOnPress(item.location)}>
                <View style={styles.autoCompleteItem}>
                    <MaterialCommunityIcons name="map-marker" />
                    <View style={{flexDirection: "row", marginLeft: 5}}>
                        {item.street !==null && <Text style={{color: Colors.light}}>{item.street}, </Text>}
                        {item.city !== null && <Text style={{color: Colors.light}}>{item.city}</Text>}
                        {item.district !== null && <Text style={{color: Colors.light}}>, {item.district}</Text>}
                    </View>
                </View>
            </Pressable>
        )
    }

    return(

        <>
            <Animated.View style={[styles.textIputWrapper, style]}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={Colors.medium} style={styles.icon} />}
                <TextInput style={defaultStyles.text} {...rest} />
            </Animated.View>

            {
                autoComplete==true && (
                    <FlatList
                        data={autoCompleteData}
                        renderItem={({item})=>autoCompleteItem(item)}
                        keyExtractor={item=>item.street}
                        style={{borderRadius: 20}}
                    />
                )
            }

        </>

    )

}

const styles = StyleSheet.create({
    autoCompleteItem:{
        width: "100%",
        padding: 10,
        backgroundColor: Colors.plain,
        flexDirection: "row",
        alignItems: "center",
    },
    textIputWrapper:{
        backgroundColor: Colors.plain,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon:{
        marginRight: 10
    },
    text:{
        flex: 1,
        width: "100%"
    },
    flatList:{
        marginTop: 10
    }
})
