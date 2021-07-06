import React from 'react'
import { View, StyleSheet, Modal} from 'react-native'

//Assets
import Colors from '../../assets/_colors'

//Components
import AppText from'../AppText'
import LottieView from 'lottie-react-native'
import * as Progress from 'react-native-progress'


 
export default function UploadScreen({onDone, progress=0, visible=false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                { 
                    progress < 1 ?
                    (<Progress.Bar 
                        color={Colors.primary} 
                        progress={progress} 
                        width={200} 
                    />)
                    : (<LottieView 
                            autoPlay
                            loop={false}
                            onAnimationFinish={()=>{
                                onDone()
                                console.log("removed");
                            }}
                            source={require("../../assets/animations/done.json")} 
                            style={styles.animation}
                        />)
                }
            </View>
        </Modal>
    )
}
 
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    animation: {
        width: 150
    }
})