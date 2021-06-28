import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

//Components
import SafeAreaScreen from './SafeAreaScreen'
import {AppForm, AppFormField, AppFormPicker,SubmitButton} from '../forms'
import AppPicker from '../AppPicker'

//Extras
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
})

const categories = [
    {
        label: "Furniture",
        value: 1
    },
    {
        label: "Clothing",
        value: 2
    },
    {
        label: "Cameras",
        value: 3
    },    
]

export default function ListingEditScreen() {
    return (
        <SafeAreaScreen>
            
            <View style={styles.container}>
                <AppForm
                    initialValues={{title: "", price: "", category: null, description: ""}}
                    onSubmit={(values)=>console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize="words"
                        autoCorrect={true}
                        name="title"
                        placeholder="Title"
                        maxLength={255}
                    />

                    <AppFormField
                        autoCapitalize="words"
                        autoCorrect={true}
                        name="price"
                        placeholder="Price"
                        keyboardType="numeric"
                        maxLength={8}
                    />
                    <AppFormPicker 
                        name="category"
                        placeholder="Category"
                        items={categories}
                        onSelectItem={(item)=>console.log(item)}
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
                        title="Post "
                    />


                </AppForm>
            </View>
            
        </SafeAreaScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }
})

