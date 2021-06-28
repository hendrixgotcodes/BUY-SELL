import React from 'react'
import {View, StyleSheet, Image, Platform, TouchableHighlight} from 'react-native'

//Components
import AppText from './AppText'
import {Swipeable} from 'react-native-gesture-handler';

//Assets
import Colors from '../assets/_colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'



export default function ListItem({style, title, subTitle, image, onPress, renderRightActions, showChevron, numberOfLines}){

    return(
       <Swipeable 
            renderRightActions = {renderRightActions}
            overshootFriction={20}
            friction={1.5}
        >
            <TouchableHighlight 
                onPress={onPress}
                activeOpacity={0.96}
            >

                <View style={[styles.container, {...style}]}>
                    <Image style={styles.figure} source={image} />
                    <View style={{flex: 1}}>
                        <AppText
                            numberOfLines={numberOfLines ? numberOfLines : 1}
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!
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
                    {showChevron && <MaterialCommunityIcons name="chevron-right" size={24} color="black" />}
                </View>

        </TouchableHighlight>
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