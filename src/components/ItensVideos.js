import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
import { styles } from "../styles/itens_video_style";

export function ItensVideos(props) {
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