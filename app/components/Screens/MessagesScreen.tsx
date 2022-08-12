/* eslint-disable react-native/no-raw-text */
import React, { useEffect, useState } from "react";
import {
    FlatList, Platform, SafeAreaView, StatusBar, StyleProp, StyleSheet, View, ViewStyle
} from "react-native";

// Components
import Colors from "../../assets/_colors";
import AppText from "../AppText";
import ListItem from "../ListItem";
import ListItemDeleteAction from "../ListItemDeleteAction";
import ListItemSeperator from "../ListItemSeperator";

// Assets

const initialMessages = [
    {
        id: 1,
        title: "Serwaa Bonsu",
        description: "Nice couch. Can i get it for 500 ?",
        image: require("../../assets/img/serwaaBonsu.jpg"),
    },
    {
        id: 2,
        title: "Samuel Opoku Asare",
        description:
            "I'm interested in this item. When will i be able to get it?",
        image: require("../../assets/img/dp.jpg"),
    },
];

export default function MessagesScreen({ navigation }:{navigation:any}) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing] = useState(false);

    useEffect(() => {
        // messagesApi.get()
    }, []);

    const deleteMessage = (id:string) => {
        setMessages(messages.filter((m) => m.id.toString() !== id));
    };

    const handleOnRefresh = () => {
        const initialMessages = messages;
        const message = initialMessages[initialMessages.length - 1];
        message.id += 2;
        message.title = `T${message.id}`;
        message.description = `D${message.id}`;
        initialMessages.push(message);
        setMessages(initialMessages);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                {/* <Pressable 
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
                </Pressable> */}

                <AppText style={styles.headerTitle as StyleProp<ViewStyle>}>Messages</AppText>
            </View>
            <View style={styles.wrapper}>
                {messages.length !== 0 ? (
                    <FlatList
                        data={messages}
                        ItemSeparatorComponent={() => (
                            <ListItemSeperator gap={1} />
                        )}
                        keyExtractor={(message) => message.id.toString()}
                        onRefresh={handleOnRefresh}
                        refreshing={refreshing}
                        renderItem={({ item }) => (
                            <ListItem
                                title={item.title}
                                subTitle={item.description}
                                image={item.image}
                                showChevron
                                renderRightActions={() => (
                                    <ListItemDeleteAction
                                        onPress={() => {
                                            deleteMessage(item.id.toString());
                                        }}
                                    />
                                )}
                                onPress={() => {
                                    navigation.navigate("chat");
                                }}
                            />
                        )}
                    />
                ) : (
                    <View style={styles.empty}>
                        <AppText>Nothing to show!</AppText>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    empty: {
        width: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center"
        padding: 20,
    },
    header: {
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
        fontSize: 24,
    },
    safeArea: {
        backgroundColor: Colors.plain,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%",
    },
    wrapper: {
        flex: 1,
    },
});
