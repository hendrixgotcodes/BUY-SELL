import { useFormikContext } from "formik";
import React from "react";

// Component
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

export default function FormImagePicker({ name }) {
    const {
        setFieldTouched,
        setFieldValue,
        handleChange,
        errors,
        touched,
        values,
        style,
    } = useFormikContext();

    const handleOnRemoveImage = (item) => {
        const uris = values[name].filter((uriItem) => uriItem !== item);

        setFieldValue(name, uris);
    };

    const handleOnAddURI = (uri) => {
        setFieldValue(name, [...values[name], uri]);
    };

    return (
        <>
            <ImageInputList
                imageURIs={values[name]}
                onRemoveURI={handleOnRemoveImage}
                onAddURI={handleOnAddURI}
            />
            {touched[name] && <ErrorMessage message={errors[name]} />}
        </>
    );
}
