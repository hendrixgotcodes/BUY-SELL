import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Platform, Pressable, Modal, FlatList} from 'react-native'

//Components
import {FlatGrid} from 'react-native-super-grid'
import {Picker} from '@react-native-picker/picker';
import AppButton from './AppButton'
import AppText from './AppText'
import Icon from './Icon'
import PickerItem from './PickerItem'
import SafeAreaScreen from './Screens/SafeAreaScreen'

//Assets
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Colors from '../assets/_colors'
import defaultStyles from '../config/_styles'

export default function AppPicker({icon, items, onBlur,onSelectItem, placeholder, selectedItem, style, ...rest}){

    const [selected, setSelected] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false)

    const textColor = !selected ? styles.text : styles.text_selected

    const submitItem = item =>{
        return {
            "label": item.label,
            "value": item.value
        }
    }

    return(
        <>
            <Pressable onPress={()=>setIsModalVisible(true)}>
                <View style={[styles.container, {...style}]}>
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
                        
                            <FlatGrid
                                data={items}
                                spacing={0}
                                keyExtractor={(item)=>item.value.toString()}
                                renderItem={
                                ({item})=>(
                                    <Pressable
                                        onPress={()=> {
                                            setSelected(submitItem(item))
                                            setIsModalVisible(false)
                                            onSelectItem(submitItem(item))
                                        }}
                                    >
                                        <Icon
                                            backgroundColor= {item.backgroundColor}
                                            width = {item.width}
                                            iconName= {item.iconName}
                                            color = {item.color}
                                            iconSize= {item.iconSize}
                                            text= {item.label}
                                        />
                                    </Pressable>
                                )
                                }
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
