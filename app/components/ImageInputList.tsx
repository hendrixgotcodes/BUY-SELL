import React, { useRef } from "react";
import { Alert, Image, ScrollView, StyleSheet, View } from "react-native";

// Components
import ImageInput from "./ImageInput";
import LongPressButton from "./LongPressButton";


type ImageInputListPropType={
    onRemoveURI?: (arg?:any)=>any,
    onAddURI?: ((arg?:any)=>any),
    imageURIs: string[]
}


export default function test({ imageURIs, onRemoveURI, onAddURI }:ImageInputListPropType) {

    const scrollView = useRef<ScrollView|null>(null);

    return (
        <View style={styles.container}>
            <ImageInput onAddImage={onAddURI} style={styles.imageInputStyle} />

            {imageURIs.length > 0 && (
                <ScrollView
                    ref={scrollView}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onContentSizeChange={() => scrollView.current?.scrollToEnd()}
                >
                    {imageURIs.map((item) => (
                        <LongPressButton
                            key={item}
                            onLongPress={() => {
                                Alert.alert(
                                    "Remove item",
                                    "Are you sure you want to remove this item?",
                                    [
                                        {
                                            text: "Remove",
                                            onPress: () => onRemoveURI && onRemoveURI(item),
                                        },
                                        {
                                            text: "Keep",
                                        },
                                    ]
                                );
                            }}
                        >
                            <Image
                                source={{ uri: item }}
                                style={styles.image}
                            />
                        </LongPressButton>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        flexWrap: "wrap",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
        marginRight: 10,
        marginBottom: 10,
    },
    imageInputStyle:{ 
        marginRight: 10 
    }
});
