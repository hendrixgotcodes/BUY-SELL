import { Formik, FormikHelpers } from "formik";
import React, { ReactChild, ReactChildren } from "react";

// Components

type AppFormPropType={
    initialValues:any,
    onSubmit: ((values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>) & ((values: any, { resetForm }: FormikHelpers<any>) => any),
    validationSchema:any,
    children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[],
}

export default function AppForm({
    initialValues,
    onSubmit,
    validationSchema,
    children,
}:AppFormPropType) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
}
