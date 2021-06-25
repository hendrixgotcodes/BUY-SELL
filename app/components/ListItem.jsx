import React from 'react'
import {View, StyleSheet, Image, Platform, Pressable} from 'react-native'

//Components
import AppText from './AppText'
import {Swipeable} from 'react-native-gesture-handler';

//Assets
import Colors from '../assets/_colors'



export default function ListItem({style, title, subTitle, image, onPress, renderRightActions}){

    return(
       <Swipeable 
            renderRightActions = {renderRightActions}
            // overshootRight= {false}
            overshootFriction={20}
            friction={1.5}
        >
            <Pressable onPress={onPress}>

                <View style={[styles.container, {...style}]}>
                    <Image style={styles.figure} source={image} />
                    <View>
                        <AppText
                            style={{...Platform.select({
                                ios: {
                                    fontSize: 18,
                                    fontWeight: "bold"
                                },
                                android:{
                                    fontSize: 12,
                                    fontWeight: "bold"
                                }
                            })}}
                        >
                            {title}
                        </AppText>

                        <AppText
                            style={{...Platform.select({
                                ios: {
                                    fontSize: 16,
                                    color: "#6e6969"
                                },
                                android:{
                                    fontSize: 12,
                                    color: "#6e6969"
                                }
                            })}}
                        >
                            {subTitle}
                        </AppText>
                    </View>
                </View>

        </Pressable>
       </Swipeable>
    )

}

export function MenuListItem({icon, description, backgroundColor}){

    return(

        <Pressable>

            <View style={styles.container}>

                <View style={[styles.figWrapper, {backgroundColor: backgroundColor}]}>
                    {icon}
                </View>

                <AppText
                    style={{...Platform.select({
                                ios: {
                                    fontSize: 18,
                                    fontWeight: "bold"
                                },
                                android:{
                                    fontSize: 12,
                                    fontWeight: "bold"
                                }
                            })}}
                >
                    {description}
                </AppText>

            </View>

        </Pressable>

    )

}

const styles = StyleSheet.create({

    container: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.plain
    },
    figure: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    },
    figWrapper:{
        width: 35,
        height: 35,
        borderRadius: 100,
        marginRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

})