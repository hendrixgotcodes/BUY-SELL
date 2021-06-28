import React from 'react'
import {StyleSheet, Text} from 'react-native'

//Assets
import defaultStyles from '../config/_styles'

export default function AppText({children, numberOfLines, style}) {
    return (
       <Text 
            style={[defaultStyles.text, {...style}]}
            numberOfLines={numberOfLines}
        >
            {children}
        </Text>
    )
}
