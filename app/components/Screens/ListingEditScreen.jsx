import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Alert} from 'react-native'

//Components
import {AppForm, AppFormField, AppFormPicker,SubmitButton, FormImagePicker} from '../forms'
import AppPicker from '../AppPicker'
import SafeAreaScreen from './SafeAreaScreen'

//Hooks
import useLocation from '../../hooks/useLocation'

//Extras
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select at least one image").label("Images")
})


const categories=[
    {
        backgroundColor: "#fc5c65",
        width: 80,
        iconName: "floor-lamp",
        color: "#fff",
        iconSize: 30,
        label: "Furniture",
        value: 1
    },
    {
        backgroundColor: "#fd9644",
        width: 80,
        iconName: "car",
        color: "#fff",
        iconSize: 30,
        label: "Cars",
        value: 2
    },
    {
        backgroundColor: "#fed330",
        width: 80,
        iconName: "camera",
        color: "#fff",
        iconSize: 30,
        label: "Cameras",
        value: 3
    },
    {
        backgroundColor: "#26de81",
        width: 80,
        iconName: "cards",
        color: "#fff",
        iconSize: 30,
        label: "Games",
        value: 4
    },
    {
        backgroundColor: "#2bcbba",
        width: 80,
        iconName: "shoe-heel",
        color: "#fff",
        iconSize: 30,
        label: "Clothing",
        value: 5
    },
    {
        backgroundColor: "#45aaf2",
        width: 80,
        iconName: "basketball",
        color: "#fff",
        iconSize: 30,
        label: "Sports",
        value: 6
    },
    {
        backgroundColor: "#4b7bec",
        width: 80,
        iconName: "headset",
        color: "#fff",
        iconSize: 25,
        label: "Movies & Others",
        value: 7
    },
]

export default function ListingEditScreen() {

    const Location = useLocation()

    return (
        <SafeAreaScreen>
            
            <View style={styles.container}>
                <AppForm
                    initialValues={{title: "", price: "", category: null, description: "", images: []}}
                    onSubmit={(values)=>console.log(values)}
                    validationSchema={validationSchema}
                >

                    <FormImagePicker
                        name="images" 
                    />

                    <AppFormField
                        autoCapitalize="words"
                        autoCorrect={true}
                        name="title"
                        placeholder="Title"
                        maxLength={255}
                    />

                    <AppFormPicker 
                        name="category"
                        placeholder="Category"
                        items={categories}
                        onSelectItem={(item)=>console.log(item)}
                        style={{width: "60%"}}
                    />

                    <AppFormField
                        autoCapitalize="words"
                        autoCorrect={true}
                        name="price"
                        placeholder="Price"
                        keyboardType="numeric"
                        maxLength={8}
                        style={{width: "30%"}}
                    />
                        
                    <AppFormField
                        autoCapitalize="words"
                        autoCorrect={true}
                        name="description"
                        placeholder="Description"
                        multiline={true}
                        numberOfLines={3}
                        // textContentType="name"
                    />

                    <SubmitButton 
                        title="Post"
                    />


                </AppForm>
            </View>
            
        </SafeAreaScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    flexBox: {
        width: "100%",
        // flex: 1,
        flexDirection: "row",
        display: "flex",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    }
})

