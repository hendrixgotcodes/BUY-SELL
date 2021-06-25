import React, {useState} from 'react'
import {View, StyleSheet, Image, TextInput} from 'react-native'

//Components
import {Formik} from 'formik'
import SafeAreaScreen from './SafeAreaScreen'
import AppTextInput from '../AppTextInput'
import AppButton from '../AppButton'

//Assets
const logo = require("../../assets/logo-red.png")

export default function LoginScreen(){

    const [email, setEmail] = useState() 
    const [password, setPassword] = useState() 

    return(
        <SafeAreaScreen style={styles.container}>
        
            <Image source={logo} style={styles.logo} />
            
            <Formik
                initialValues={{email: "", password: ""}}
                onSubmit={(values)=>console.log(values)}
            >

                {
                    ({handleSubmit, handleChange})=>(
                            <>
                                <AppTextInput 
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="email"
                                    keyboardType="email-address"
                                    onChangeText = {handleChange("email")}
                                    placeholder="Email"
                                    textContentType="emailAddress"
                                />
                                <AppTextInput 
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="lock"
                                    onChangeText = {handleChange("password")}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    textContentType="password"
                                />
                                <AppButton 
                                    title="Login"
                                    onPress={handleSubmit}
                                />
                            </>
                    )
                }

            </Formik>

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