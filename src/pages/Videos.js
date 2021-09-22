import React, { useState, useEffect } from 'react';
import { Text, View, Alert, FlatList } from 'react-native';
import api from '../service/api';
import { StatusBar } from 'expo-status-bar';
import { ItensVideos } from '../components/ItensVideos'


export default function Videos({ navigation }) {

    const [video, setVideo] = useState([]);
    const[isLoading,setIsLoading] = useState(false);

    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 

    //function para listar videos 
    async function handleListVideos() {

        try {
            //Requisição a api 
            const responseVideos = await api.get('todos-videos/');
            //Pegando o data do response da api
            const data = responseVideos.data
            setVideo(data); //Setando o data para o video

        } catch (error) {
            console.log(error);
            Alert.alert('Error');
        }
    }

    useEffect(() => {
        handleListVideos();
    }, []);

    return (
        <View>
            <StatusBar
                animated={true}
                backgroundColor="#bde4dd" />
            <View>
                <FlatList data={video}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <ItensVideos data={item} />
                    )}
                />
            </View>
        </View>
    )
}