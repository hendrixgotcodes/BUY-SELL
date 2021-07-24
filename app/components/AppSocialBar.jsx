import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Share, Pressable, Platform } from 'react-native'

//Assets
import Colors from '../assets/_colors'
 
export default function AppSocialBar({handleOnMessage, onShared, onShareFailed, onLiked}) {

    const [hasLiked, setHasLiked] = useState(false)

    const handleOnLike = ()=>{
        
        hasLiked === true ? setHasLiked(false) : setHasLiked(true)

        onLiked !== undefined && onLiked(hasLiked)
    }

    const handleOnShare = async ()=>{

        try {
            
            const result = await Share.share({
                message: "https://google.com",
                ...Platform.select({
                    ios: {
                        url: "https://google.com"
                    },
                    android: {
                        title: "Share a listing"
                    }
                    
                })
            })

            if(result.action === Share.sharedAction()){
                onShared !== undefined && onShared()
            }else{
                onShareFailed !== undefined && onShareFailed()
            }



        } catch (error) {
            
        }

    }

    return (
        <View style={styles.container}>
            <View style={[styles.iconWrapper, {backgroundColor: Colors.primary}]}>
                <Pressable onPress={handleOnLike}>
                    <MaterialCommunityIcons 
                        name={hasLiked === true ? "thumb-up" : "thumb-up-outline"} 
                        size={16} color={Colors.plain} 
                    />
                </Pressable>
            </View>
            <Pressable 
                onPress={handleOnMessage}
                style={[styles.iconWrapper, {backgroundColor: Colors.medium}]}
            >
                <MaterialCommunityIcons name="email-outline" size={16} color={Colors.plain} />
            </Pressable>
            <Pressable 
                onPress={handleOnShare}
                style={[styles.iconWrapper, {backgroundColor: Colors.secondary}]}>
                <MaterialCommunityIcons name="send" size={16} color={Colors.plain} />
            </Pressable>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: Colors.plain,
        borderTopColor: Colors.veryLight,
        borderTopWidth: 0.17
    },
    iconWrapper:{
        padding: 8,
        borderRadius: 100,
        backgroundColor: Colors.plain,
        marginRight: 10
    }
})