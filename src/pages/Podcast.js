import React, { useState, useEffect } from 'react';
import { Text, View, Alert, FlatList } from 'react-native';
import api from '../service/api';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { ItensVideos } from '../components/ItensVideos'

export default function Podcast({ navigation }) {
    const [podcast, setPodcast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    //function para listar podcasts 
    async function handleListPodcast() {

        try {
            //Requisição a api 
            const responsePodcast = await api.get('todos-podcasts/');
            //Pegando o data do response da api
            const data = responsePodcast.data
            setPodcast(data); //Setando o data para o podcast

        } catch (error) {
            console.log(error);
            Alert.alert('Error');
        }
    }

    useEffect(() => {
        handleListPodcast();
    }, []);

    return (
        <View>
            <StatusBar
                animated={true}
                backgroundColor="#bde4dd" />
            <View>
                <FlatList data={podcast}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <ItensVideos data={item} />
                    )}
                />
            </View>
        </View>
    )
}