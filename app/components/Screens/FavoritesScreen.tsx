/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { FlatList, Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

// Components
import Colors from "../../assets/_colors";
import formatNumber from "../../util/formatNumber";
import AppText from "../AppText";
import Card from "../Card";
import SafeAreaScreen from "./SafeAreaScreen";

// hooks

// resources
import routes from "../navigators/routes";
import auth from "../../api/auth";

export default function FavoritesScreen() {
    const [favorites] = useState([]);
    const navigation = useNavigation()
    const currentUser = auth.getCurrentUser()

    return (
        <SafeAreaScreen style={styles.container}>
            <View style={styles.header}>
                <AppText style={styles.headerTitle as StyleProp<ViewStyle>}>Favorites</AppText>
            </View>

            <View style={styles.wrapper}>
                {favorites === undefined || favorites.length === 0 ? (
                    <>
                        <View style={styles.animationWrapper}>
                            <LottieView
                                autoPlay
                                loop={false}
                                source={require("../../assets/animations/favorites.json")}
                                style={{
                                    width: 300,
                                    height: 300,
                                    alignSelf: "center",
                                }}
                            />
                            <AppText style={styles.text as StyleProp<ViewStyle>}>
                                Your favorite listings will appear here.
                            </AppText>
                        </View>

                        {/* <View style={styles.textWrapper} >
                            <AppText style={styles.text}>
                                Your favorite listings will appear here.
                            </AppText>
                        </View> */}
                    </>
                ) : (
                    <>
                        <FlatList
                            data={favorites}
                            // ItemSeparatorComponent = {()=>(
                            //     <ListItemSeperator gap={20} />
                            // )}
                            keyExtractor={(item) => item}
                            // onRefresh={loadListings}
                            // refreshing={isLoading}
                            renderItem={({ item }:{item:any}) => (
                                <Card
                                    title={item.title}
                                    subTitle={`₵${formatNumber(
                                        item.item.price,
                                        "currency"
                                    )}`}
                                    // style={{ marginTop: 20 }}
                                    imageUrl={item.item.images[0].url}
                                    onPress={() => {
                                        navigation.navigate(
                                            routes.LISTING_DETAILS,
                                            {
                                                item,
                                                currentUser,
                                            }
                                        );
                                    }}
                                    thumbnailUrl={
                                        item.item.images[0].thumbnailUrl
                                    }
                                />
                            )}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
                )}
            </View>
        </SafeAreaScreen>
    );
}

// Platform.select({
//     ios:{

//     }
// })

const styles = StyleSheet.create({
    animationWrapper: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        backgroundColor: Colors.plain,
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
    text: {
        fontSize: Platform.OS === "android" ? 16 : 20,
        // fontWeight: "bold",
        textAlign: "center",
    },
    // textWrapper: {
    //     bottom: Platform.OS == "android" ? 200 : 100,
    //     left: "20%",
    //     position: "absolute",
    //     ...Platform.select({
    //         ios: {
    //             transform: [{ translateX: "-135%" }],
    //             left: "50%",
    //         },
    //     }),
    // },
    wrapper: {
        flex: 1,
        backgroundColor: Colors.offwhite,
        paddingHorizontal: 10,
    },
});
