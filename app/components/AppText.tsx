import React, { ReactChild, ReactChildren } from "react";
import { StyleProp, Text, ViewStyle } from "react-native";

// Assets
import defaultStyles from "../config/_styles";


type AppTextProps={
    children: ReactChild|ReactChildren,
    numberOfLines?: number,
    style?: StyleProp<ViewStyle>
}

export default function AppText({ children, numberOfLines, style }:AppTextProps) {
    return (
        <Text
            style={[defaultStyles.text, { ...style as object }]}
            numberOfLines={numberOfLines}
        >
            {children}
        </Text>
    );
}
