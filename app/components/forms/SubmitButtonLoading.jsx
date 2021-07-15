import React from 'react'
import { View, Text } from 'react-native'

//Components
import AppButtonLoading from '../AppButtonLoading'

//Hooks
import {useFormikContext} from 'formik'

export default function SubmitButton({isLoading,title}) {

    const {handleSubmit} = useFormikContext()

    return (
        <AppButtonLoading
            isLoading={isLoading}
            title={title}
            onPress={handleSubmit}
            style={{marginTop: 10}}
         />
    )
}

