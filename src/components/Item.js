import React, { useState, useCallback, useRef } from "react";
import { Button, View, Text, StyleSheet, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";


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
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 15,
        borderRadius: 5,
        flexDirection: 'column',
        alignItems:'center'
    },
    titulo: {
        fontSize: 17,
        fontWeight: 'bold'
    }, 
    video:{
        height:241, 
        width:521
    }
   
})