import React, { useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';


export default function UpdatePodcast({route, navigation }) {

    const [podcast, setPodecast] = useState(route.params ? route.params : {})
    console.warn(route.params)


    //function fazer requisição a api 
    async function UpdatePodcast(){
       
    }

    function navigationToListPodcast() {
        navigation.navigate('ListPodcast');
    }

    
    return (
        <View>
            <View style={styles.form}>
                <Text style={styles.texto}>Nome</Text>
                <Input label='Nome' onChangeText = {text => setNome(text)}  value={podcast.nome}/>
                <Text style={styles.texto}>URL</Text>
                <Input label='URL' onChangeText = {text => setUrl(text)} value={podcast.url}/>
                <Text style={styles.texto}>Descrição</Text>
                <Input label='Descricão' onChangeText = {text => setDescricao(text)} value={podcast.descricao}/>
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