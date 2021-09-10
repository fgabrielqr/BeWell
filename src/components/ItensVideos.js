import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";


export function ItensVideos(props){

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
    }
   
})