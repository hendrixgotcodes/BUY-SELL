import React, {useState} from 'react'
import { View, SafeAreaView, StyleSheet, Platform, StatusBar, Text} from 'react-native'
import {FlatList} from 'react-native'

//Components
import ListItem from '../ListItem'
import ListItemSeperator from '../ListItemSeperator'
import ListItemDeleteAction from '../ListItemDeleteAction'
import AppText from  '../AppText'


const initialMessages = [

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

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const deleteMessage = (id)=>{
        setMessages(messages.filter((m)=> m.id !== id))
    }

    const handleOnRefresh = ()=>{
        let initialMessages = messages
        let message = initialMessages[initialMessages.length-1]
        message.id = message.id+2
        message.title = `T${message.id}`
        message.description = `D${message.id}`
        initialMessages.push(message)
        setMessages(initialMessages)
    }

    return (
        <SafeAreaView style={styles.safeArea}>
           {messages.length !== 0 ? 
                (<FlatList
                    data={messages}
                    keyExtractor={message => message.id.toString()}
                    refreshing={refreshing}
                    onRefresh = {handleOnRefresh}
                    renderItem = {({item})=>(
                        <ListItem
                            title={item.title} 
                            subTitle= {item.description}
                            image={item.image}
                            showChevron
                            numberOfLines={2}
                            renderRightActions = {
                                ()=>(
                                    <ListItemDeleteAction onPress={()=>{
                                        deleteMessage(item.id)
                                    }} />
                                )
                            }
                            onPress={()=>{
                                // console.log("hi");
                            }}
                        />
                    )}
                    ItemSeparatorComponent={
                        ()=><ListItemSeperator />
                    }
                />) : (
                    <View style={styles.empty}>
                        <AppText>Nothing to show!</AppText>
                    </View>
                )
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%"
    },
    empty: {
        width: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center"
        padding: 20
    }
})
