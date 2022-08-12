import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

// Components
import AppButton from "../AppButton";

// Hooks

export default function SubmitButton({ title }:{title:string}) {
    const { handleSubmit } = useFormikContext<any>();

    return (
        <AppButton
            title={title}
            onPress={handleSubmit}
            style={styles.button}
        />
    );
}

const styles = StyleSheet.create({
    button:{ marginTop: 10 }
})