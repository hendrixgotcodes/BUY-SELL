import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";

const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name:string, params:any) => {
    navigationRef.current?.navigate(name, params);
};

export default navigationRef;
