import React, { useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity, Alert} from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';


export default function UpdateVideos({route, navigation }) {

    const [video, setVideo] = useState(route.params ? route.params : {})
    const {user, logout, userLoading} = useAuth();

    //navegation para ir para tela do Listagem de videos
    function navigationToListVideos() {
        navigation.navigate('ListVideos');
    }


    //function fazer requisição a api 
    async function UpdateVideos(){
        var body = new FormData();
        body.append('nome', video.nome);
        body.append('url', video.url);
        body.append('descricao', video.descricao); 
        body.append('id_usuario', video.id_usuario);
    
        const headers = { 
            'authorization': 'Bearer ' + user.tokenUser,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'  
        };

        try {
            const responseVideo =  await api.put('videos/' +video.id+'/', body, { headers, body: body } );
            navigationToListVideos()
        }catch(error){
            console.log(error);
            Alert.alert('Error');
        }

    }


    return (
        <View>
            <View style={styles.form}>
            <Text style={styles.texto}>Nome</Text>
                <Input label='Nome' onChangeText = {nome => setVideo({...video, nome})}   value={video.nome}/>
                <Text style={styles.texto}>URL</Text>
                <Input label='URL' onChangeText = {url => setVideo({...video, url})}  value={video.url}/>
                <Text style={styles.texto}>Descrição</Text>
                <Input label='Descricão' onChangeText = {descricao => setVideo({...video, descricao})}  value={video.descricao}/>
           </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={UpdateVideos}>
                    <Text style={styles.textBtn}>
                        Editar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};