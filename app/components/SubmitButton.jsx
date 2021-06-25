import React from 'react'
import { View, Text } from 'react-native'

//Components
import AppButton from './AppButton'

//Hooks
import {useFormikContext} from 'formik'

export default function SubmitButton({title}) {

    const {handleSubmit} = useFormikContext()

    return (
        <AppButton
            title={title}
            onPress={handleSubmit}
         />
    )
}
