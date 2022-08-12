import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

// Components
import AppButtonLoading from "../AppButtonLoading";

// Hooks

export default function SubmitButton({ isLoading, title }:{isLoading:boolean, title:string}) {
    const { handleSubmit } = useFormikContext();

    return (
        <AppButtonLoading
            isLoading={isLoading}
            title={title}
            onPress={handleSubmit}
            style={styles.button}
        />
    );
}

const styles = StyleSheet.create({
    button:{ marginTop: 10 }
})