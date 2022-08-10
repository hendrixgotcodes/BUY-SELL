import { useFormikContext } from "formik";
import React from "react";

// Components
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

// Assets

// Hook

export default function AppFormField({ name, style, ...rest }) {
    const {
        setFieldTouched,
        setFieldValue,
        errors,
        touched,
        values,
    } = useFormikContext();

    return (
        <>
            <AppTextInput
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                onBlur={() => setFieldTouched(name)}
                style={style}
                {...rest}
            />
            {touched[name] && <ErrorMessage message={errors[name]} />}
        </>
    );
}
