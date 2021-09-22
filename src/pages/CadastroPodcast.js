import React, { useState, useEffect, useContext} from 'react';
import { Keyboard, Text, View, TouchableOpacity, Alert} from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { InputForm } from '../components/InputForm';


// import form
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// YUP
const schema = yup.object().shape({
    nome: yup.string().required("Informe o nome"),
    url: yup.string().required("Informe a URL"),
    descricao: yup.string().required("Informe o Descrição"),

});


export default function CadastroPodcast({navigation }) {

    const {user, userLoading} = useAuth();

    // constante retornadas pelo react-hook-form
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    //function para redirecionar para a pagina da lista de podcast
    function navigationToListPodcast() {
        navigation.navigate('ListPodcast');
    }


    //function fazer requisição a api 
    async function handleCreatePodcast(data){
        var body = new FormData();
        body.append('nome', data.nome);
        body.append('url', data.url);
        body.append('descricao', data.descricao);
        body.append('id_usuario', user.id);
        
        const headers = { 
            'authorization': 'Bearer ' + user.tokenUser,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'  
        };

      try {
        const responsePodcast =  await api.post('podcasts/', body, { headers} );
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
                <InputForm name='nome' control={control} 
                    placeholder="Nome"
                    error={ errors.nome && errors.nome.message } 
                />
                <Text style={styles.texto}>URL</Text>
                <InputForm name='url' control={control} 
                    placeholder="URL"
                    error={ errors.url && errors.url.message } 
                />
                <Text style={styles.texto}>Descricão</Text>
                <InputForm name='descricao' control={control} 
                    placeholder="Descricão"
                    error={ errors.descricao && errors.descricao.message } 
                />
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={handleSubmit ( handleCreatePodcast)}>
                    <Text style={styles.textBtn}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};