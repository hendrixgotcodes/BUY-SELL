import React from 'react'
import { View, StyleSheet} from 'react-native'

//Components
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

//Assets
import Colors from '../../assets/_colors'

//Hook
import {useFormikContext} from 'formik'


export default function AppFormField({name, style, ...rest}) {

    const {setFieldTouched, setFieldValue, handleChange, errors, touched, values} = useFormikContext()

    return (
        <>
            <AppTextInput 
                // onChangeText = {handleChange(name)}
                onChangeText = {(text)=>setFieldValue(name, text)}
                value={values[name]}
                onBlur= {()=>setFieldTouched(name)}
                style={style}
                {...rest}
            />
            {touched[name] && <ErrorMessage message={errors[name]} />}

        </>
    )
}
