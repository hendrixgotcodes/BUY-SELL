import { useFormikContext } from "formik";
import React from "react";

// Component
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";



export default function FormImagePicker({ name }:{name:string}) {
    const {
        setFieldValue,
        errors,
        touched,
        values,
    } = useFormikContext<any>();

    const handleOnRemoveImage = (item:string) => {
        const uris = values[name].filter((uriItem:string) => uriItem !== item);

        setFieldValue(name, uris);
    };

    const handleOnAddURI = (uri:string) => {
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
