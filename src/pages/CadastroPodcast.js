import React, { useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';


export default function CadastroPodcast() {

    const {user, userLoading} = useAuth();

    const [nome, setNome] = useState('');
    const [url, setUrl] = useState('');
    const [descricao, setDescricao] = useState('');


    //function fazer requisição a api 
    async function handleCreatePodcast(){
        var params = new URLSearchParams();
        params.append('nome', nome);
        params.append('url', url);
        params.append('descricao', descricao); 
        params.append('id_usuario', user.id);

        //is_active

      try {
            const response = await api.post('podcasts/', params);
            console.log(response);
            setNome(''); 
            setUrl('');
            setDescricao('');
            Keyboard.dismiss(); 
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