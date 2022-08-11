import * as Haptics from "expo-haptics";
import React, { ReactChild, ReactChildren } from "react";
import { StyleSheet } from "react-native";
import { LongPressGestureHandler, State } from "react-native-gesture-handler";

export default function LongPressButton({ children, onLongPress }:{ children:ReactChild|ReactChildren, onLongPress:(arg?:any)=>any }) {
    return (
        <LongPressGestureHandler
            onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.ACTIVE) {
                    Haptics.selectionAsync();
                    onLongPress();
                }
            }}
            minDurationMs={800}
        >
            {children}
        </LongPressGestureHandler>
    );
}