import React, { useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity, Alert} from 'react-native';
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

export default function UpdateVideos({route, navigation }) {

    const [video, setVideo] = useState(route.params ? route.params : {})
    const {user, logout, userLoading} = useAuth();
    const[isLoading,setIsLoading] = useState(false);

    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 


    // constante retornadas pelo react-hook-form
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    //navegation para ir para tela do Listagem de videos
    function navigationToListVideos() {
        navigation.navigate('ListVideos');
    }


    //function fazer requisição a api 
    async function UpdateVideos(data){
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
                <InputForm name='nome' control={control} 
                    placeholder="Nome"
                    defaultValue={video.nome}
                    error={ errors.nome && errors.nome.message } 
                />
                <Text style={styles.texto}>URL</Text>
                <InputForm name='url' control={control} 
                    placeholder="URL"
                    defaultValue={video.url}
                    error={ errors.url && errors.url.message } 
                />
                <Text style={styles.texto}>Descricão</Text>
                <InputForm name='descricao' control={control} 
                    placeholder="Descricão"
                    defaultValue={video.descricao}
                    error={ errors.descricao && errors.descricao.message } 
                />
           </View>

           <View>
                <TouchableOpacity style={styles.btn_entrar} onPress={handleSubmit (UpdateVideos)}>
                    <Text style={styles.textBtn}>
                        Editar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};