import React, { useState, useCallback, useRef } from "react";
import { Button, View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from "../styles/itens_styles";

export function Itens(props) {
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
                <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('UpdateVideos', props.data)}>
                    <Text style={styles.textBtn} >
                        <Icon name="edit" size={20} color={"#666666"} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={props.apagar}>
                    <Icon name="trash-alt" size={20} color={"#666666"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}