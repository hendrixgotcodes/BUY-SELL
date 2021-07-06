import React from 'react'
import { View, Text } from 'react-native'

//Components
import {Formik} from 'formik'

export default function AppForm({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, {resetForm})=>onSubmit(values, resetForm)}
            validationSchema={validationSchema}
        >
            {()=>(
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}
