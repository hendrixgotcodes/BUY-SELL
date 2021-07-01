import React from 'react'
import { View, StyleSheet} from 'react-native'

//Components
import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

//Hook
import {useFormikContext} from 'formik'


export default function AppFormField({ item, name, onBlur, onSelectItem,...rest}) {

    const {setFieldTouched, setFieldValue,handleChange, errors, touched, values, style} = useFormikContext()

    return (
        <>
            <AppPicker
                onSelectItem = {(item)=>{
                    setFieldValue(name, item)
                    handleChange(name)
                    setFieldTouched(name)
                }}
                onBlur= {()=>{
                    setFieldTouched(name)
                }}
                selectedItem = {values[name]}
                style={style}
                {...rest}
            />
            {touched[name] && <ErrorMessage message={errors[name]} />}

        </>
    )
}
