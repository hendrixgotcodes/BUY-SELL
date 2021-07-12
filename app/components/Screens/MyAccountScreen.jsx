import React from 'react'
import {View, StyleSheet, FlatList, Pressable} from 'react-native'


//Screens
import SafeAreaScreen from './SafeAreaScreen'

//Assets
import Colors from '../../assets/_colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../../auth/useAuth'

//Component
import AppText from '../AppText'
import ListItem, {MenuListItem} from '../ListItem'
import ListItemSeperator from '../ListItemSeperator'

export default function MyAccountScreen({navigation}){

    const {user, logOut} = useAuth()


    const listDetails= [
        {
            id: 1,
            description: "My Listings",
            backgroundColor: Colors.primary,
            icon: <MaterialCommunityIcons name="format-list-bulleted" size={20} color={Colors.plain} />,
            targetScreen: "My Listings"
        },
        {   
            id:2,
            description: "My Messages",
            backgroundColor: Colors.secondary,
            icon: <MaterialCommunityIcons name="email" size={20} color={Colors.plain} />,
            targetScreen: "Messages"
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
                        title="Samuel Opoku Asare" 
                        subTitle={user.email}
                        image= {require("../../assets/img/dp.jpg")}
                />
            

           <View style={styles.listWrapper}>

                <FlatList

                    data={listDetails}
                    keyExtractor={(items)=>items.id.toString()}
                    // ItemSeparatorComponent= {()=><ListItemSeperator gap={2} />}
                    renderItem={
                        ({item})=>(
                            <MenuListItem
                                description={item.description}
                                backgroundColor= {item.backgroundColor}
                                icon={item.icon}
                                onPress={()=>navigation.navigate(item.targetScreen)}
                            />
                        )
                    }

                />

           </View>

           <MenuListItem
                description="Log Out"
                backgroundColor={Colors.complementary} 
                icon={<MaterialCommunityIcons name="logout" size={20} color={Colors.plain} />}
                onPress={logOut}
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
