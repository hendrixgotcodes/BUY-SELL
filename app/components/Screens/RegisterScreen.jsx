import React from 'react'
import { View, StyleSheet } from 'react-native'

//Components
import {AppForm, AppFormField, SubmitButton} from '../forms'
import SafeAreaScreen from './SafeAreaScreen'

//Extra
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).max(10).label("Password")
})

export default function RegisterScreen() {
    return (
        <SafeAreaScreen>
            
            <View style={styles.container}>

                <AppForm
                    initialValues={{name: "", email: "", password: ""}}
                    onSubmit={(values)=>console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize="words"
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder="Name"
                        textContentType="name"
                    />

                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />

                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                        textContentType="password"
                    />

                    <SubmitButton 
                        title="register"
                    />

                </AppForm>

            </View>

        </SafeAreaScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
