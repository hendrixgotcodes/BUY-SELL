import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform,
} from "react-native";

// Assets
import colors from "../../assets/_colors";

import image from "../../assets/bgs/chair.jpg";

export default function ViewImageScreen() {
    return (
        <View style={styles.wrapper}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.contentWrapper}>
                    <View style={styles.btnWrapper}>
                        <MaterialCommunityIcons
                            name="close"
                            size={24}
                            color={colors.plain}
                        />
                        <MaterialCommunityIcons
                            name="trash-can-outline"
                            size={24}
                            color={colors.plain}
                        />
                    </View>

                    <Image source={image} style={styles.image} />
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.dark,
    },
    safeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%",
    },
    contentWrapper: {},
    btnWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    image: {
        width: "100%",
        height: "80%",
        marginTop: 50,
    },
});
