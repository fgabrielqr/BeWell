import React, { useState } from 'react';
import { Keyboard, Text, View, TouchableOpacity, Alert } from 'react-native';
import { UpdateStyle } from '../styles/update_style';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { InputForm } from '../components/InputForm';

// import form
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// YUP
const schema = yup.object().shape({
    nome: yup.string().required("Informe o nome"),
    url: yup.string().required("Informe a URL"),
    descricao: yup.string().required("Informe o Descrição"),

});

export default function CreateVideos({ navigation }) {

    const { user, userLoading } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    // constante retornadas pelo react-hook-form
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    //function para redirecionar para a pagina da lista de videos
    function navigationToListVideos() {
        navigation.navigate('ListVideos');
    }

    //function fazer requisição a api 
    async function handleCreateVideos(data) {
        var body = new FormData();
        body.append('nome', data.nome);
        body.append('url', data.url);
        body.append('descricao', data.descricao);
        body.append('id_usuario', user.id);

        const headers = {
            'authorization': 'Bearer ' + user.tokenUser,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        try {
            const responseVideos = await api.post('videos/', body, { headers, body: body });
            Keyboard.dismiss();
            navigationToListVideos();
        } catch (error) {
            console.log(error);
            Alert.alert('Error');
        }
    }

    return (
        <View style={UpdateStyle.container}>
            <View style={UpdateStyle.form}>
                <Text style={UpdateStyle.texto}>Nome</Text>
                <InputForm name='nome' control={control}
                    error={errors.nome && errors.nome.message} placeholder="Ex: Jubileu"
                />
                <Text style={UpdateStyle.texto}>URL</Text>
                <InputForm name='url' control={control} placeholder="Ex: https://youtu.be/bwLaIImg5_8"
                    error={errors.url && errors.url.message}
                />
                <Text style={UpdateStyle.texto}>Descricão</Text>
                <InputForm name='descricao' control={control} placeholder="Ex: Ansiedade não é brincadeira"
                    error={errors.descricao && errors.descricao.message}
                />
            </View>
            <View style={UpdateStyle.btn}>
                <TouchableOpacity style={UpdateStyle.btn_login} onPress={handleSubmit(handleCreateVideos)}>
                    <Text style={UpdateStyle.textBtn}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};