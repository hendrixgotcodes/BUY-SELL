import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Platform} from 'react-native'

//Components
import {Picker} from '@react-native-picker/picker';
// import SafeAreaScreen from './Screens/SafeAreaScreen'

//Assets
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Colors from '../assets/_colors'
import defaultStyles from '../config/_styles'

export default function AppPicker({icon, ...rest}){

    const [selectedLanguage, setSelectedLanguage] = useState();

    return(

        // <View style={styles.container}>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="Swift" value="swift" />
                <Picker.Item label="Objective C" value="objc" />
            </Picker>

        // </View>

    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.plain,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon:{
        marginRight: 10
    }
})
