import React from 'react'
import {View, StyleSheet, Image, TextInput} from 'react-native'

//Components
import {Formik} from 'formik'
import SafeAreaScreen from './SafeAreaScreen'
import AppTextInput from '../AppTextInput'
import AppText from '../AppText'
import AppButton from '../AppButton'

//Assets
const logo = require("../../assets/logo-red.png")

//Extra
import * as Yup from 'yup'

//Variable
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password")
})

export default function LoginScreen(){

    return(
        <SafeAreaScreen>
        
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
            
                <Formik
                    initialValues={{email: "", password: ""}}
                    onSubmit={(values)=>console.log(values)}
                    validationSchema={validationSchema}
                >

                    {
                        ({handleSubmit, handleChange, errors})=>(
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
                                    <AppText style={{color: "red"}}>{errors.email}</AppText>
                                    <AppTextInput 
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        icon="lock"
                                        onChangeText = {handleChange("password")}
                                        placeholder="Password"
                                        secureTextEntry={true}
                                        textContentType="password"
                                    />
                                    <AppText style={{color: "red"}}>{errors.password}</AppText>
                                    <AppButton 
                                        title="Login"
                                        onPress={handleSubmit}
                                    />
                                </>
                        )
                    }

                </Formik>
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