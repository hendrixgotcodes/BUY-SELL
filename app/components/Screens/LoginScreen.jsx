import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Image, StatusBar} from 'react-native'

//Components
import SafeAreaScreen from './SafeAreaScreen'
import {AppForm, ErrorMessage, AppFormField, SubmitButtonLoading} from '../forms'


//Assets
import useAuth from '../../auth/useAuth'
const logo = require("../../assets/logo.png")

//Extra
import authApi from '../../api/auth'
import * as Yup from 'yup'

//Variables
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password")
})



export default function LoginScreen(){

    const [hasLoginFailed, setHasLoginFailed] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false) 

    const {logIn} = useAuth()

    const handleSubmit = async ({email, password})=>{


        setIsLoading(true)


        try {
            const user  =  await authApi.login(email, password)
            logIn(user)
        } catch (error) {
            setHasLoginFailed(true)
            setErrorMessage(error.message)
            
            setIsLoading(false)
            // console.log(error);
        }


    }

    return(
        <SafeAreaScreen>
        
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />

                {hasLoginFailed === true && <ErrorMessage message={errorMessage} />}
                <AppForm
                    initialValues={{email: "", password: ""}}
                    onSubmit={(res)=>handleSubmit(res)}
                    validationSchema={validationSchema}
                >                    
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
                    
                    <SubmitButtonLoading 
                        title="Login"
                        isLoading={isLoading}
                    />

                </AppForm>
            </View>

        </SafeAreaScreen>
    )

}

const styles = StyleSheet.create({

    container:{
        padding: 10
    },
   logo:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
   }
})