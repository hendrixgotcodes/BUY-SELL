import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'


//Screens
import SafeAreaScreen from './SafeAreaScreen'

//Assets
import Colors from '../../assets/_colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Component
import AppText from '../AppText'
import ListItem, {MenuListItem} from '../ListItem'
import ListItemSeperator from '../ListItemSeperator'

export default function MyAccountScreen(){

    const listDetails= [
        {
            id: 1,
            description: "My Listings",
            backgroundColor: Colors.primary,
            icon: <MaterialCommunityIcons name="format-list-bulleted" size={20} color={Colors.plain} />
        },
        {   
            id:2,
            description: "My Messages",
            backgroundColor: Colors.secondary,
            icon: <MaterialCommunityIcons name="email" size={20} color={Colors.plain} />
        }
        // {
        //     description: "My Messages",
        //     backgroundColor: Colors.secondary,
        //     icon: <MaterialCommunityIcons name="email" size={24} color={Colors.plain} />
        // },
    ]

    return(
        <SafeAreaScreen>

           <ListItem
                title="Mosh Hamedani" 
                subTitle="programmingwithmosh@gmail.com"
                image= {require("../../assets/img/mosh.jpg")}
           />

           <View style={styles.listWrapper}>

                <FlatList

                    data={listDetails}
                    keyExtractor={(items)=>items.id.toString()}
                    ItemSeparatorComponent= {ListItemSeperator}
                    renderItem={
                        ({item})=>(
                            <MenuListItem
                                description={item.description}
                                backgroundColor= {item.backgroundColor}
                                icon={item.icon}
                            />
                        )
                    }

                />

           </View>

           <MenuListItem
                description="Log Out"
                backgroundColor={Colors.complementary} 
                icon={<MaterialCommunityIcons name="logout" size={20} color={Colors.plain} />}
            />

        </SafeAreaScreen>
    )

}

const styles = StyleSheet.create({
    listWrapper: {
        marginTop: 30,
        marginBottom: 15
    }
})
