import React, { useState, useCallback, useRef } from "react";
import { Button, View, Text, StyleSheet, Alert , TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from 'react-native-vector-icons/FontAwesome5';


export function Item(props){

    let link_video = props.data.url;
    const url = link_video.split("=");
        
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.data.nome}</Text>

            <View style={styles.video}>
                <YoutubePlayer
                    height={500}
                    videoId={url[1]}
                />
            </View>
            <Text style={styles.descricao}>{props.data.descricao}</Text>

            <View style={styles.areaBtn}>
                <TouchableOpacity style={styles.btn}  onPress={() => props.navigation.navigate('UpdatePodcast', props.data)}
>
                    <Text style={styles.textBtn} >
                        <Icon name="edit"  size={25} color={"#666666"}/>
                    </Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.btn}  onPress={props.apagar}>
                    <Icon name="trash-alt"  size={28} color={"#666666"}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 15,
        borderRadius: 5,
        flexDirection: 'column',
        alignItems:'center',
        //width:'100%'
    },
    titulo: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf:'flex-start',
        padding:5,        
    }, 
    video:{
        
        height:241, 
        width:'100%'
    },
    descricao:{
        padding:5,
        fontSize:15,
        color: '#000',
        alignSelf:'flex-start',
    },
    areaBtn:{
        flexDirection:'row', 
        justifyContent:'space-between',
        alignSelf:'flex-start',
    },
    btn:{
        padding:10
    }
   
})