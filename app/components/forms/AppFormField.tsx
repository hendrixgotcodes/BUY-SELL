import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import React from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";

// Components
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

// Assets

// Hook


interface AppFormFieldPropTypes extends TextInputProps{
    name: string,
    style?: StyleProp<ViewStyle>,
    icon?: keyof typeof MaterialCommunityIcons.glyphMap,
}

export default function AppFormField({ name, style, ...rest }:AppFormFieldPropTypes) {
    const {
        setFieldTouched,
        setFieldValue,
        errors,
        touched,
        values,
    } = useFormikContext<any>();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                style={style}
                value={values[name]}
                onChangeText={(text) => setFieldValue(name, text)}
                {...rest}
            />
            {touched[name] && <ErrorMessage message={errors[name]} />}
        </>
    );
}
