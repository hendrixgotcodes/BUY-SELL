import { useFormikContext } from "formik";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";

// Components
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

// Hook

interface AppFormFieldPropTypes{
    item?:any,
    name:string,
    items: any[],
    onBlur?: (arg?:any)=>any,
    onSelectItem?: (arg?:any)=>any,
    style: StyleProp<ViewStyle>,
}

export default function AppFormField({
    name,
    onSelectItem,
    style,
    items,
    ...rest
}:AppFormFieldPropTypes) {
    const {
        setFieldTouched,
        setFieldValue,
        handleChange,
        errors,
        touched,
        values,
    } = useFormikContext<any>();

    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => {
                    setFieldValue(name, item);
                    handleChange(name);
                    setFieldTouched(name);

                    onSelectItem && onSelectItem(item);
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
