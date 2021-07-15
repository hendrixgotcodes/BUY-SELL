import React, {useState, useEffect} from 'react'
import { View, SafeAreaView, StyleSheet, Platform, Pressable, StatusBar, Text} from 'react-native'
import {FlatList} from 'react-native'

//Components
import AppText from  '../AppText'
import ListItem from '../ListItem'
import ListItemSeperator from '../ListItemSeperator'
import ListItemDeleteAction from '../ListItemDeleteAction'
import {MaterialCommunityIcons} from '@expo/vector-icons'

//Assets
import Colors from '../../assets/_colors'
import messagesApi from '../../api/messages'


const initialMessages = [

    {
        id: 1,
        title: "Serwaa Bonsu",
        description: 'Nice couch. Can i get it for 500 ?',
        image: require('../../assets/img/serwaaBonsu.jpg')
    },
    {
        id: 2,
        title: "Samuel Opoku Asare",
        description: "I'm interested in this item. When will i be able to get it?",
        image: require('../../assets/img/dp.jpg')
    },

]

export default function MessagesScreen({navigation}) {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        // messagesApi.get()
    }, [])

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

    const handleReturnOnPress = ()=>{

        navigation.goBack()

    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>

                <Pressable 
                    hitSlop={{
                        bottom: 20,
                        top: 20,
                        left: 0,
                        right: 0
                    }}
                    onPress={handleReturnOnPress}
                    style={styles.return} 
                >

                    <MaterialCommunityIcons name="chevron-left" size={32} color={Colors.primary} />
                    
                    <Text style={{fontSize: 20,}}>Listings</Text>
                </Pressable>

                <AppText style={styles.headerTitle}>
                    Messages
                </AppText>
            </View>
           <View style={styles.wrapper}>
                {messages.length !== 0 ? 
                    (<FlatList
                        data={messages}
                        ItemSeparatorComponent= {()=><ListItemSeperator gap={1} />}
                        keyExtractor={message => message.id.toString()}
                        onRefresh = {handleOnRefresh}
                        refreshing={refreshing}
                        renderItem = {({item})=>(
                            <ListItem
                                title={item.title} 
                                subTitle= {item.description}
                                image={item.image}
                                showChevron
                                renderRightActions = {
                                    ()=>(
                                        <ListItemDeleteAction onPress={()=>{
                                            deleteMessage(item.id)
                                        }} />
                                    )
                                }
                                onPress={()=>{
                                    navigation.navigate("chat")
                                }}
                            />
                        )}
                    />) : (
                        <View style={styles.empty}>
                            <AppText>Nothing to show!</AppText>
                        </View>
                    )
                }
           </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    empty: {
        width: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center"
        padding: 20
    },
    header:{
        flexDirection: "row",
        height: 50,
        width: "100%",
        backgroundColor: Colors.plain,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 0.17,
        borderColor: Colors.light
    },
    return: {
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        left: 0
    },
    headerTitle: {
        textAlign: "center", 
        fontWeight: "bold", 
        fontSize: 24
    },
    safeArea: {
        backgroundColor: Colors.plain,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%"
    },
    wrapper:{
        flex: 1
    }
})
