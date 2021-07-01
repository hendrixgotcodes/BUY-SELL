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

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

    return (
        <>
            <AppTextInput 
                onChangeText = {handleChange(name)}
                onBlur= {()=>setFieldTouched(name)}
                style={style}
                {...rest}
            />
            {touched[name] && <ErrorMessage message={errors[name]} />}

        </>
    )
}
