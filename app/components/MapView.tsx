import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import MapView, { Marker } from "react-native-maps";

export default function Map({ coordinates }:{coordinates: {latitude:number, longitude:number}}) {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude:
                        coordinates !== null
                            ? coordinates.latitude
                            : 5.647746557375088,
                    longitude:
                        coordinates !== null
                            ? coordinates.longitude
                            : -0.08263701573021955,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    draggable
                    coordinate={{
                        latitude: 5.647746557375088,
                        longitude: -0.08263701573021955,
                    }}
                    onDragEnd={(e) =>
                        console.log({ x: e.nativeEvent.coordinate })
                    }
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 150,
        borderRadius: 20,
        overflow: "hidden",
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
