import LottieView from "lottie-react-native";
import React from "react";
import { Modal, StyleSheet, View } from "react-native";

// Assets


// Components
type UploadScreenPropType={
    onDone: (arg?:any)=>any,
    progress: number,
    visible: boolean,
}


export default function UploadScreen({
    onDone,
    progress = 0,
    visible = false,
}:UploadScreenPropType) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    // <Progress.Bar
                    //     color={Colors.primary}
                    //     progress={progress}
                    //     width={200}
                    // />
                    <LottieView
                        autoPlay={true}
                        loop={true}
                        onAnimationFinish={() => {
                            onDone();
                            console.log("removed");
                        }}
                        source={require("../../assets/animations/uploading.json")}
                        style={styles.animation}
                    />
                ) : (
                    <LottieView
                        autoPlay={true}
                        loop={true}
                        onAnimationFinish={() => {
                            onDone();
                            console.log("removed");
                        }}
                        source={require("../../assets/animations/done.json")}
                        style={styles.animation}
                    />
                )}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    animation: {
        width: 150,
    },
});
