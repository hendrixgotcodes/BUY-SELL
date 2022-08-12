import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

// Components
import * as Yup from "yup";

import authApi from "../../api/auth";
import useAuth from "../../auth/useAuth";
import {
    AppForm, AppFormField, ErrorMessage, SubmitButtonLoading
} from "../forms";
import SafeAreaScreen from "./SafeAreaScreen";

// Assets

// Extra

import logo from "../../assets/logo.png";

// Variables
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
});

export default function LoginScreen() {
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { logIn } = useAuth();

    const handleSubmit = async ({ email, password }:{email:string, password:string}) => {
        setIsLoading(true);

        try {
            const user = await authApi.login(email, password);
            logIn(user);
        } catch (error:any) {
            setHasLoginFailed(true);
            setErrorMessage(error.message);

            setIsLoading(false);
            // console.log(error);
        }
    };

    return (
        <SafeAreaScreen style={{}}>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />

                {hasLoginFailed === true && (
                    <ErrorMessage message={errorMessage} />
                )}
                <AppForm
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(res) => handleSubmit(res)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                        icon="email"
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

                    <SubmitButtonLoading title="Login" isLoading={isLoading} />
                </AppForm>
            </View>
        </SafeAreaScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});
