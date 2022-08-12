// Screens

// API

// Assets
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Component
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import {
    FlatList,
    Image,
    Pressable,
    RefreshControl,
    ScrollView,
    StatusBar,
    StyleSheet,
    View
} from "react-native";

import listingsAPI from "../../api/listings";
import Colors from "../../assets/_colors";

// Hooks
import useAPI from "../../hooks/useAPI";
import formatNumber from "../../util/formatNumber";
import ActivityIndicator from "../ActivityIndicator";
import AppButton from "../AppButton";
import AppText from "../AppText";
import Card from "../Card";
import routes from "../navigators/routes";
import SafeAreaScreen from "./SafeAreaScreen";


export default function ListingsScreen({ navigation }) {
    const {
        data: listings,
        hasError,
        isLoading,
        request: loadListings,
    } = useAPI(listingsAPI.getListings);


    useEffect(() => {
        loadListings();



        StatusBar.setBarStyle("dark-content", true);
    }, []);

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
                        source={require("../../assets/logo.png")}
                    />

                    <View style={styles.messageWrapper}>
                        <Pressable
                            onPress={() => navigation.navigate("search")}
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
                    <View
                        style={styles.componentWrapper}
                    >
                        <MaterialCommunityIcons
                            name="map-marker"
                            size={16}
                            color={Colors.light}
                        />
                        <AppText style={styles.textStyle}>
                            Ghana
                        </AppText>
                    </View>

                    <View
                        style={styles.componentWrapper}
                    >
                        <MaterialCommunityIcons
                            name="tag"
                            size={16}
                            color={Colors.light}
                        />
                        <AppText style={styles.textStyle}>
                            Category
                        </AppText>
                    </View>

                    <MaterialCommunityIcons
                        name="filter"
                        size={16}
                        color={Colors.light}
                    />
                </View>
            </View>

            <View style={styles.wrapper}>
                {hasError === true && (
                    <View
                        style={styles.errorLabelWrapper}
                    >
                        <AppText
                            style={styles.errorLabel}
                        >
                            Couldn&apos;t retrieve the listings
                        </AppText>
                        <AppButton title="Retry" onPress={loadListings} />
                    </View>
                )}

                <ActivityIndicator visible={isLoading} />

                {listings.length === 0 && isLoading === false ? (
                    <ScrollView
                        style={styles.fullHeight}
                        contentContainerStyle={styles.fullHeight}
                        refreshControl={
                            <RefreshControl
                                onRefresh={loadListings}
                                refreshing={isLoading}
                                style={styles.fullHeight}
                            />
                        }
                    >
                        <LottieView
                            autoPlay
                            loop
                            source={require("../../assets/animations/empty.json")}
                            // style={{flex: 1}}
                        />
                    </ScrollView>
                ) : (
                    <FlatList
                        data={listings}
                        // ItemSeparatorComponent = {()=>(
                        //     <ListItemSeperator gap={20} />
                        // )}
                        keyExtractor={(item) => item.id.toString()}
                        onRefresh={loadListings}
                        refreshing={isLoading}
                        renderItem={({ item }) => (
                            <Card
                                title={item.title}
                                subTitle={`₵${formatNumber(
                                    item.price,
                                    "currency"
                                )}`}
                                imageUrl={item.images[0].url}
                                style={styles.card}
                                onPress={() => {
                                    navigation.navigate(
                                        routes.LISTING_DETAILS,
                                        item
                                    );
                                }}
                                thumbnailUrl={item.images[0].thumbnailUrl}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
        </SafeAreaScreen>
    );
}

const styles = StyleSheet.create({
    // badge: {
    //     position: "absolute",
    //     width: 10,
    //     height: 10,
    //     top: 0,
    //     right: 0,
    //     backgroundColor: Colors.secondary,
    //     borderRadius: 100,
    // },
    componentWrapper:{
        borderRightWidth: 0.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
    },
    card: {
        borderRadius: 10,
        marginTop: 20,
    },
    container: {
        backgroundColor: Colors.plain,
    },
    header: {
        alignItems: "center",
        backgroundColor: Colors.plain,
        display: "flex",
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        paddingHorizontal: 15,
        width: "100%",
    },
    logo: {
        height: 30,
        width: 30,
    },
    messageWrapper: {
        position: "absolute",
        right: 10,
    },
    subHeader: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderTopWidth: 0.2,
        // borderBottomWidth: 0.2,
        borderColor: Colors.light,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: Colors.offwhite,
    },
    fullHeight: {
        flex:1
    },
    errorLabelWrapper:{
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
    },
    errorLabel:{ textAlign: "center", marginBottom: 20 },
    textStyle:{ color: Colors.light, fontSize: 16 }
});
