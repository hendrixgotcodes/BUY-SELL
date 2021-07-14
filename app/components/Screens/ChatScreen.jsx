import React, { useCallback, useEffect, useState} from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'

//Assets
import Colors from '../../assets/_colors'
import {MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'

//Components
import AppText from  '../AppText'
import SafeAreaScreen from './SafeAreaScreen'
import {Bubble, Composer, GiftedChat, Send, InputToolbar } from 'react-native-gifted-chat'
 
export default function ChatScreen({navigation}) {

    const [messages, setMessages] = useState([]);


    useEffect(() => {

        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'My message',
                createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
                image: 'https://facebook.github.io/react/img/logo_og.png',
                // You can also add a video prop:
                video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            }
        ])
    }, [])

    const handleReturnOnPress = ()=>{

        navigation.goBack()

    }

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderBubble = (props)=>{

        return(
            <Bubble 
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: Colors.veryLight
                    },
                }}
                textStyle={{
                    right: {
                        color: Colors.medium
                    },
                    left: {
                        color: Colors.medium
                    }
                }}
            />
        )

    }

    const renderInputToolbar = (props)=>{

        return(
            <InputToolbar
                {...props}
                containerStyle={styles.inputToolbar}
            />
        )

    }

    const renderSend = (props)=>{
            return (
                <Send
                    {...props}
                    containerStyle={{margin: 0}} 
                >
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <MaterialCommunityIcons name="send" color={Colors.primary} size={24} style={{margin: 10}} />
                    </View>
                </Send>
            )
    }

    const scrollToBottomComponent = ()=>{

        return(
            <FontAwesome name="angle-double-down" size={22} color={Colors.veryLight} />
        )

    }

    return (
        <SafeAreaScreen style={styles.container}>

            <View style={styles.header}>

                <Pressable 
                    style={styles.return} 
                    onPress={handleReturnOnPress}
                >
                    <MaterialCommunityIcons name="chevron-left" size={32} color={Colors.primary} />
                    
                    <View style={styles.returnBadge}>
                        <Text style={{color: Colors.plain}}>2</Text>
                    </View>
                </Pressable>

                <AppText style={styles.headerTitle}>
                    Messages
                </AppText>

                <View style={styles.phone}>
                    <MaterialCommunityIcons name="phone-outline" size={24} />
                </View>

            </View>

            <GiftedChat
                alwaysShowSend={true}
                messages={messages}
                onSend={onSend}
                renderBubble={renderBubble}
                renderInputToolbar={renderInputToolbar}
                renderSend={renderSend}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
                showUserAvatar={false}
                user={{
                    _id: 2,
                }}
            />
            
        </SafeAreaScreen>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.plain
    },
    header:{
        flexDirection: "row",
        height: 50,
        width: "100%",
        backgroundColor: Colors.plain,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 0.17,
        borderColor: Colors.light
    },
    headerTitle: {
        textAlign: "center", 
        fontWeight: "bold", 
        fontSize: 24
    },
    inputToolbar:{
           borderRadius: 100,
        borderColor: Colors.veryLight,
        borderWidth: 1,
        marginHorizontal: 10,
        marginTop: 20,
    },
    phone: {
        marginRight: 10
    },
    return: {
        alignItems: "center",
        flexDirection: "row",
        // position: "absolute",
        // left: 0
    },
    returnBadge: {
        width: 25, 
        height: 25, 
        borderRadius: 100, 
        backgroundColor: Colors.secondary, 
        justifyContent: "center", 
        alignItems: "center"
    }
})