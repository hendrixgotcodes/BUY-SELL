import React from 'react'
import { View, Text } from 'react-native'

//Components
import {Formik} from 'formik'

export default function AppForm({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
            initialValues={{email: "", password: ""}}
            onSubmit={(values)=>console.log(values)}
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
