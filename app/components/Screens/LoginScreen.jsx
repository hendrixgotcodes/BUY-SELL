import React, {useState, useContext} from 'react'
import {View, StyleSheet, Image, TextInput} from 'react-native'

//Components
import AppText from '../AppText'
import SafeAreaScreen from './SafeAreaScreen'
import {AppForm, ErrorMessage, AppFormField, SubmitButton} from '../forms'


//Assets
import AuthContext from '../../auth/context'
import authStorage from '../../auth/storage'
const logo = require("../../assets/logo-red.png")

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

    const authContext = useContext(AuthContext)

    const handleSubmit = async ({email, password})=>{

        try {
            const user  =  await authApi.login(email, password)
            authContext.setUser(user)
            authStorage.storeToken(user)
        } catch (error) {
            setHasLoginFailed(true)
            setErrorMessage(error.message)
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
                    
                    <SubmitButton 
                        title="Login"
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