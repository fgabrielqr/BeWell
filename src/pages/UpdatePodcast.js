import React, { useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity, Alert} from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';


export default function UpdatePodcast({route, navigation }) {

    const [podcast, setPodecast] = useState(route.params ? route.params : {})
    const {user, logout, userLoading} = useAuth();


    //function fazer requisição a api 
    async function UpdatePodcast(){
        var params = new FormData();
        params.append('nome', podcast.nome);
        params.append('url', podcast.url);
        params.append('descricao', podcast.descricao); 
        params.append('id_usuario', podcast.id_usuario);
    
        const headers = { 
            'authorization': 'Bearer ' + user.tokenUser,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'  
        };

        try {
            const responseUser =  await api.put('podcasts/' +podcast.id+'/', params, { headers, body: params } );
            navigationToListPodcast();
        }catch(error){
            console.log(error);
            Alert.alert('Error');
        }

    }

    function navigationToListPodcast() {
        navigation.navigate('ListPodcast');
    }

    
    return (
        <View>
            <View style={styles.form}>
                <Text style={styles.texto}>Nome</Text>
                <Input label='Nome' onChangeText = {nome => setPodecast({...podcast, nome})}   value={podcast.nome}/>
                <Text style={styles.texto}>URL</Text>
                <Input label='URL' onChangeText = {url => setPodecast({...podcast, url})}  value={podcast.url}/>
                <Text style={styles.texto}>Descrição</Text>
                <Input label='Descricão' onChangeText = {descricao => setPodecast({...podcast, descricao})}  value={podcast.descricao}/>
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={UpdatePodcast}>
                    <Text style={styles.textBtn}>
                        Editar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};