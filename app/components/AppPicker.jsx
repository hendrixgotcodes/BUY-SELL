import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Platform, Pressable, Modal, FlatList} from 'react-native'

//Components
import {Picker} from '@react-native-picker/picker';
import AppButton from './AppButton'
import AppText from './AppText'
import PickerItem from './PickerItem'
import SafeAreaScreen from './Screens/SafeAreaScreen'

//Assets
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Colors from '../assets/_colors'
import defaultStyles from '../config/_styles'

export default function AppPicker({icon, items, onBlur,onSelectItem, placeholder, selectedItem, ...rest}){

    const [selected, setSelected] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false)

    const textColor = !selected ? styles.text : styles.text_selected

    return(
        <>
            <Pressable onPress={()=>setIsModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={Colors.medium} />}
                    <AppText style={textColor}>
                        {selected ? selected.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={Colors.medium} />
                </View>
            </Pressable>
            <Modal visible={isModalVisible} animationType="slide" >
                <SafeAreaScreen>
                    <View style={{paddingHorizontal: 15, flex: 1, overFlow: "hidden"}}>

                        <AppButton title="close" onPress={()=>{
                            setIsModalVisible(false)
                            onBlur()
                        }} />

                        <FlatList
                            data={items}
                            keyExtractor={(item)=>item.value.toString()}
                            renderItem={({item})=>(
                                <PickerItem 
                                    label={item.label}
                                    onPress={()=> {
                                        setSelected(item)
                                        setIsModalVisible(false)
                                        onSelectItem(item)
                                    }}
                                />
                            )}
                        />
                    </View>
                </SafeAreaScreen>
            </Modal>
        </>
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
        alignItems: "center",
        padding: 15
    },
    icon:{
        marginRight: 10
    },
    text:{
        flex: 1,
        color: Colors.light
    }, 
    text_selected:{
        flex: 1,
        color: Colors.dark
    }
})
