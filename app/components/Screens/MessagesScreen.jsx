import React from 'react'
import { View, SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native'
import {FlatList} from 'react-native'

//Components
import ListItem from '../ListItem'
import ListItemSeperator from '../ListItemSeperator'

const messages = [

    {
        id: 1,
        title: "T1",
        description: 'D1',
        image: require('../../assets/img/mosh.jpg')
    },
    {
        id: 2,
        title: "T2",
        description: 'D2',
        image: require('../../assets/img/mosh.jpg')
    },

]

export default function MessagesScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem = {({item})=>(
                    <ListItem
                        title={item.title} 
                        subTitle= {item.description}
                        image={item.image}
                    />
                )}
                ItemSeparatorComponent={
                    ()=><ListItemSeperator />
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%"
    }
})
