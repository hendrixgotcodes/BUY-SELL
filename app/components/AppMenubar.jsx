import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import Colors from '../assets/_colors'
import AppText from './AppText'
 
export default function AppMenubar({items, onChange}) {

    const [active, setActive] = useState("All")

    const handleMenuItemOnPress = (item)=>{
        setActive(item)
        onChange(item)
    }

    return (
        <View
            style={styles.container}
        >
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                // style={styles.container}
            >
                {
                    items.map((item)=>(
                        <Pressable
                            onPress={()=>handleMenuItemOnPress(item)}
                            style={[styles.items, item === active && styles.items_current]}
                        >
                            <AppText
                                style={{color: item === active ? "#fff" : Colors.medium}}
                            >
                                {item}
                            </AppText>
                        </Pressable>
                    ))
                }

            </ScrollView>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        borderColor: "transparent",
        borderBottomColor: Colors.offwhite,
        borderTopColor: Colors.offwhite,
        borderWidth: 1,
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginBottom: 10
    },
    items:{
        alignItems: "center",
        borderColor: Colors.offwhite,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: "center",
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    items_current:{
        backgroundColor: Colors.medium
    },
    item_current_text:{
        color: "#fff"
    },
    item_text:{
        color: Colors.medium
    }
})