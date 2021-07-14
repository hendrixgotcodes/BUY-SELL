import React, {useEffect, useState} from 'react'
import { Alert, View, Text, StyleSheet, Modal, Pressable} from 'react-native'


//API
import listingsAPI from '../../api/listings'


//Components
import {AppForm, AppFormField, AppFormPicker,SubmitButton, FormImagePicker} from '../forms'
import AppPicker from '../AppPicker'
import AppText from '../AppText'
import MapView from '../MapView'
import MapScreen from './MapScreen'
import SafeAreaScreen from './SafeAreaScreen'
import UploadScreen from './UploadScreen'

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

    const [progress, setProgress] = useState(0)
    const [uploadVisible, setUploadVisible] = useState(false)
    const [isMapShown, setIsMapShown] = useState(false)


    const handleSubmit = (listings, resetForm)=>{

        return new Promise((resolve, reject)=>{


            setUploadVisible(true)

            listingsAPI.addListing({...listings, Location}, (progress)=>setProgress(progress))
            .then((result)=>{

                setProgress(0)

                if(!result.ok){
                    alert("Could not save the listing")
                    setUploadVisible(false)
                    reject()
                }else{
                    // setTimeout(() => {
                    //     setUploadVisible(false)
                    // }, 1000);
                    resetForm()
                    resolve()
                }

            })

        })

    }

    const handleOnMapPress = ()=>{
        setIsMapShown(true)
    }

    return (
        <SafeAreaScreen>
            
            <View style={styles.container}>

                <UploadScreen onDone={()=>setUploadVisible(false)} progress={progress} visible={uploadVisible} />

                <AppForm
                    initialValues={{title: "", price: "", category: null, description: "", images: []}}
                    onSubmit={(values, resetForm)=>handleSubmit(values, resetForm)}
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
                        items={categories}
                        name="category"
                        onSelectItem={(item)=>console.log(item)}
                        placeholder="Category"
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

                    <Pressable onPress={handleOnMapPress}>
                        <View style={styles.mapViewWrapper}>
                            <MapView />
                            <AppText>
                                Accra, Ghana
                            </AppText>
                        </View>
                    </Pressable>

                    <SubmitButton 
                        title="Post"
                    />


                </AppForm>

                <Modal visible={isMapShown} animationType="slide">
                    <MapScreen dismiss={()=>setIsMapShown(false)} />
                </Modal>

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
    },
    mapViewWrapper:{
        
    }
})

