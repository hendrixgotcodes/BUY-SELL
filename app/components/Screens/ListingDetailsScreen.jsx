import React from 'react'
import {Keyboard, KeyboardAvoidingView, Platform, StyleSheet, SafeAreaView, StatusBar, View} from 'react-native'
import {Image} from 'react-native-expo-image-cache'

//Components
import AppText from '../AppText'
import {AppForm, AppFormField, SubmitButton} from '../forms'
import Card from '../Card'
import ListItem from '../ListItem'
import SafeAreaScreen from './SafeAreaScreen'

//Assets
import Colors from '../../assets/_colors'
import messagesApi from '../../api/messages'
import * as Yup from 'yup'

//Constants
const validationSchema = Yup.object().shape({
    message: Yup.string().required().label("Message"),
})


export default function ListingDetailScren({route}){

    const item = route.params
    const image = require("../../assets/img/dp.jpg")

    console.log();

    const handleSubmit= async ({message}, resetForm)=>{

        Keyboard.dismiss()

        const result = await messagesApi.send(message, item.id)

        if(!result.ok){
            console.log(result);
            return
        }

        resetForm()

    }

    return(

        // <SafeAreaScreen>

            <KeyboardAvoidingView
                behavior="position"
                keyboardVericalOffset={Platform.OS === "ios" ? 30 : 0 }
            >
                <View style={styles.cardContainer}>
                    {/* <Image style={styles.cardImage} source={{uri: item.images[0].url}} /> */}
                    <Image preview={{uri:item.images[0].thumbnailUrl}} tint="light" style={styles.cardImage} uri={item.images[0].url} />
                    <View style={styles.captionsWrapper}>
                        <AppText style={styles.header} numberOfLines={2}>{item.title}</AppText>
                        <AppText numberOfLines={1}
                            style={{color: Colors.secondary, fontWeight: "bold"}}
                        >
                            ₵{item.price}
                        </AppText>
                    </View>
                </View>
                <ListItem 
                    title="Samuel Opoku Asare"
                    subTitle="5 Listings"
                    image={image}
                    showChevron
                    style={{marginTop: 1}}
                />

                <View style={styles.inputView}>

                    <AppForm
                        initialValues={{message: ""}}
                        onSubmit={(values, resetForm)=>handleSubmit(values, resetForm)}
                        validationSchema={validationSchema}
                    >
                        <AppFormField
                            autoCorrect={true}
                            icon="send"
                            name="message"
                            placeholder="Message..."
                        />
                        <SubmitButton
                            title="contact seller" 
                        />
                    </AppForm>

                </View>

            </KeyboardAvoidingView>
            
        // {/* </SafeAreaScreen> */}

    )

}

const styles = StyleSheet.create({

    cardContainer: {
        backgroundColor: Colors.plain,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden"
    },
    cardImage:{
        width: "100%",
        height: 300,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    captionsWrapper: {
        display: "flex",
        flexDirection: "column",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    inputView: {
        marginTop: 30,
        paddingHorizontal: 10
    },
    header:{
        fontWeight: "bold", 
        fontSize: Platform.OS === "android" ? 30 : 30
    }

})