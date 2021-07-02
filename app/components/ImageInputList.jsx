import React, {useRef} from 'react'
import { View, StyleSheet, Alert, Image, ScrollView} from 'react-native'



//Components
import ImageInput from './ImageInput'
import ListItemSeperator from './ListItemSeperator'
import LongPressButton from './LongPressButton'

export default function test({imageURIs, onRemoveURI, onAddURI}) {
    

    const removeURI = (item)=>{

        let uris = URIs.filter(uriItem => uriItem !== item)
        setImageURIs(uris)
        
    }

    const scrollView = useRef()



    return (
        <View style={styles.container}>

            <ImageInput
                onAddImage ={onAddURI}
                style={{marginRight: 10}}
            />

            { imageURIs.length >0 &&     
                (
                    <ScrollView 
                        ref={scrollView} 
                        horizontal 
                        showsHorizontalScrollIndicator={false} 
                        onContentSizeChange={()=>scrollView.current.scrollToEnd()}
                    >
                        {imageURIs.map(item=>(
                                <LongPressButton key={item} onLongPress={()=>{
                                        
                                        Alert.alert(
                                            "Remove item",
                                            "Are you sure you want to remove this item?",
                                            [
                                                {
                                                    text: "Yes, Delete",
                                                    onPress: ()=>onRemoveURI(item)
                                                },
                                                {
                                                    text: "No, Keep",
                                                }
                                            ]
                                        )

                                    }}>
                                        <Image 
                                            source={{uri: item}}
                                            style={styles.image}
                                        />
                                </LongPressButton>
                            ))
                        }
                    </ScrollView>
                )
            }
            

        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        flexWrap: "wrap"
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 8,
        marginRight: 10,
        marginBottom: 10
    }
})