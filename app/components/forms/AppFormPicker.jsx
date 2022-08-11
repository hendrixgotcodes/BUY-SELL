import { useFormikContext } from "formik";
import React from "react";

// Components
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

// Hook

export default function AppFormField({
    item,
    name,
    onBlur,
    onSelectItem,
    ...rest
}) {
    const {
        setFieldTouched,
        setFieldValue,
        handleChange,
        errors,
        touched,
        values,
        style,
    } = useFormikContext();

    return (
        <>
            <AppPicker
                onSelectItem={(item) => {
                    setFieldValue(name, item);
                    handleChange(name);
                    setFieldTouched(name);

                    onSelectItem(item);
                }}
                onBlur={() => {
                    setFieldTouched(name);
                }}
                selectedItem={values[name]}
                style={style}
                {...rest}
            />
            {touched[name] && <ErrorMessage message={errors[name]} />}
        </>
    );
}
