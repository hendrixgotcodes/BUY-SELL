import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

// Components

// Asset
import listingsAPI from "../../api/listings";
import Colors from "../../assets/_colors";
import useAPI from "../../hooks/useAPI";
import AppMenubar from "../AppMenubar";
import AppTextInput from "../AppTextInput";
import Card from "../Card";
import routes from "../navigators/routes";

// API

// Hooks
import SafeAreaScreen from "./SafeAreaScreen";

export default function SearchScreen() {
    const {
        data: listings,
        isLoading,
        request: loadListings,
    } = useAPI(listingsAPI.getListings);

    const navigation = useNavigation()

    return (
        <SafeAreaScreen style={{}}>
            <View style={styles.textInputWrapper}>
                <AppTextInput
                    placeholder="search..."
                    style={styles.textInput}
                />
            </View>

            <AppMenubar
                items={[
                    "All",
                    "Cars",
                    "Camera",
                    "Clothing",
                    "Furniture",
                    "Games",
                    "Sports",
                ]}
                onChange={(item) => {
                    console.log(item);
                }}
            />

            <View>
                <FlatList
                    data={listings}
                    // ItemSeparatorComponent = {()=>(
                    //     <ListItemSeperator gap={20} />
                    // )}
                    // keyExtractor={(card)=>card.id.toString()}
                    onRefresh={loadListings}
                    refreshing={isLoading}
                    renderItem={({ item }:{item:any}) => (
                        <Card
                            title={item.title}
                            subTitle={`₵${item.price}`}
                            imageUrl={item.images[0].url}
                            // style={styles.card}
                            onPress={() => {
                                navigation.navigate(routes.LISTING_DETAILS, {
                                    item,
                                    // user,
                                });
                            }}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaScreen>
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: Colors.offwhite,
    },
    textInputWrapper: {
        paddingHorizontal: 10,
        marginBottom: 5,
    },
});
