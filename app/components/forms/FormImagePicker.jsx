import React from 'react'
import { View, StyleSheet } from 'react-native'
import {useFormikContext} from 'formik'

//Component
import ErrorMessage from './ErrorMessage'
import ImageInputList from '../ImageInputList'
 
export default function FormImagePicker({name}) {

    const {setFieldTouched, setFieldValue,handleChange, errors, touched, values, style} = useFormikContext()

    const handleOnRemoveImage = (item)=>{

        let uris = values[name].filter(uriItem => uriItem !== item)

        setFieldValue(name, uris)
    
    }

    const handleOnAddURI = uri=>{
        setFieldValue(name, [...values[name], uri])
    }

    return (
        <>
            <ImageInputList
                imageURIs = {name}
                onRemoveURI={handleOnRemoveImage}
                onAddURI = {handleOnAddURI} 
            />
            {touched[name] && <ErrorMessage message={errors[name]} />}
        </>
    )
}
 
const styles = StyleSheet.create({
    container: {
 
    }
})