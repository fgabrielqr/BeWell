import React, { useState, useEffect, useContext} from 'react';
import { Keyboard, Text, View, TouchableOpacity, Alert} from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';


export default function CadastroPodcast({navigation }) {

    const {user, userLoading} = useAuth();

    const [nome, setNome] = useState('');
    const [url, setUrl] = useState('');
    const [descricao, setDescricao] = useState('');

    //function para redirecionar para a pagina da lista de podcast
    function navigationToListPodcast() {
        navigation.navigate('ListPodcast');
    }


    //function fazer requisição a api 
    async function handleCreatePodcast(){
        var body = new FormData();
        body.append('nome', nome);
        body.append('url', url);
        body.append('descricao', descricao);
        body.append('id_usuario', user.id);
        
        const headers = { 
            'authorization': 'Bearer ' + user.tokenUser,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'  
        };

      try {
        const responsePodcast =  await api.post('podcasts/', body, { headers, body: body } );
        setNome(''); 
        setUrl('');
        setDescricao('');
        Keyboard.dismiss(); 
        navigationToListPodcast();
      }catch(error){
        console.log(error);
        Alert.alert('Error');
      }
    }

    
    return (
        <View>
            <View style={styles.form}>
                <Text style={styles.texto}>Nome</Text>
                <Input label='Nome' onChangeText = {text => setNome(text)}/>
                <Text style={styles.texto}>Nome</Text>
                <Input label='URL' onChangeText = {text => setUrl(text)}/>
                <Text style={styles.texto}>Nome</Text>
                <Input label='Descricão' onChangeText = {text => setDescricao(text)}/>
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={handleCreatePodcast}>
                    <Text style={styles.textBtn}>
                        CADASTRAR
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};