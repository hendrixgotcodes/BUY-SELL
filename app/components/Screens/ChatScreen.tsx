/* eslint-disable react-native/no-raw-text */
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Video } from "expo-av";
import * as Linking from "expo-linking";
import React, { useCallback, useEffect, useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
// Assets
import { Bubble, GiftedChat,    InputToolbar,Send, } from "react-native-gifted-chat";
import Colors from "../../assets/_colors";

// Components
import AppText from "../AppText";
import SafeAreaScreen from "./SafeAreaScreen";

export default function ChatScreen({ navigation }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Nice couch. Can i get it for 500",
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: "React Native",
                    avatar: require("../../assets/img/serwaaBonsu.jpg"),
                },
            },
            // {
            //     _id: 2,
            //     text: 'My message',
            //     createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
            //     user: {
            //         _id: 2,
            //         name: 'React Native',
            //         avatar: 'https://facebook.github.io/react/img/logo_og.png',
            //     },
            //     image: 'https://facebook.github.io/react/img/logo_og.png',
            //     // You can also add a video prop:
            //     video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            //     // Mark the message as sent, using one tick
            //     sent: true,
            //     // Mark the message as received, using two tick
            //     received: true,
            //     // Mark the message as pending with a clock loader
            //     pending: true,
            //     // Any additional custom parameters are passed through
            // }
        ]);
    }, []);

    const handleReturnOnPress = () => {
        navigation.goBack();
    };

    const handlePhoneOnPress = () => {
        try {
            Linking.openURL("tel:+233506000705");
        } catch (error) {
            console.log(error);
        }
    };

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        );
    }, []);

    const renderBubble = (props) => (
        <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: Colors.veryLight,
                },
            }}
            textStyle={{
                right: {
                    color: Colors.medium,
                },
                left: {
                    color: Colors.medium,
                },
            }}
        />
    );

    const renderInputToolbar = (props) => (
        <InputToolbar {...props} containerStyle={styles.inputToolbar} />
    );

    const renderMessageVideo = (props) => {
        const { currentMessage } = props;

        return (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{ paddingHorizontal: 10 }}>
                <Video
                    posterSource={{ uri: currentMessage.image }}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    useNativeControls={false}
                    usePoster={true}
                    shouldPlay={false}
                    source={{ uri: currentMessage.video }}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{ width: 200, height: 200 }}
                />
            </View>
        );
    };

    const renderSend = (props) => (
        // eslint-disable-next-line react-native/no-inline-styles
        <Send {...props} containerStyle={{ margin: 0 }}>
            <View style={styles.send}>
                <MaterialCommunityIcons
                    name="send"
                    color={Colors.primary}
                    size={24}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{ margin: 10 }}
                />
            </View>
        </Send>
    );

    const scrollToBottomComponent = () => (
        <FontAwesome
            name="angle-double-down"
            size={22}
            color={Colors.veryLight}
        />
    );

    return (
        <SafeAreaScreen style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.return} onPress={handleReturnOnPress}>
                    <MaterialCommunityIcons
                        name="chevron-left"
                        size={32}
                        color={Colors.primary}
                    />

                    <View style={styles.returnBadge}>
                        <Text style={{ color: Colors.plain }}>2</Text>
                    </View>
                </Pressable>

                <AppText style={styles.headerTitle}>Serwaa Bonsu</AppText>

                <View style={styles.phone}>
                    <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={handlePhoneOnPress}
                    >
                        <MaterialCommunityIcons
                            name="phone-outline"
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <GiftedChat
                alwaysShowSend={true}
                messages={messages}
                onSend={onSend}
                renderBubble={renderBubble}
                renderInputToolbar={renderInputToolbar}
                renderMessageVideo={renderMessageVideo}
                renderSend={renderSend}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
                showUserAvatar={false}
                user={{
                    _id: 2,
                }}
            />
        </SafeAreaScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.plain,
    },
    header: {
        flexDirection: "row",
        height: 50,
        width: "100%",
        backgroundColor: Colors.plain,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 0.17,
        borderColor: Colors.light,
    },
    headerTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24,
    },
    inputToolbar: {
        borderRadius: 100,
        borderColor: Colors.veryLight,
        borderWidth: 1,
        marginHorizontal: 10,
        marginTop: 20,
    },
    phone: {
        marginRight: 10,
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
        alignItems: "center",
    },
    send: { 
        justifyContent: "center",
        alignItems: "center"
    }
});
