import React, { useState, useEffect, useContext, useRef} from 'react';
import { useAuth } from '../contexts/Auth';
import {Formik} from 'formik';
import {Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';
import * as Yup from 'yup';
import { styles } from '../styles/cadastro';
import api from '../service/api';


export default function UpdateVideos({route, navigation }) {

    const [video, setVideo] = useState(route.params ? route.params : {});
    const {user, logout, userLoading} = useAuth();
    const[isLoading,setIsLoading] = useState(false);

    const nome = useRef(null);
    const url = useRef(null);
    const descricao = useRef(null);

    const FormSchema = Yup.object().shape({
        nome: Yup.string().required('Campo obrigatório'),
        url: Yup.string().required('Campo obrigatório'),
        descricao: Yup.string().required('Campo obrigatório'),
    });


    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 

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
        <Formik
        initialValues={{
            nome: video.nome,
            url: video.url,
            descricao: video.descricao,
        }}
        onSubmit={values => {
            UpdateVideos(values);
        }}
        validationSchema={FormSchema}>
        {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            setFieldTouched,
        }) => (
            <View >
                <View style={styles.form}>

                    <Text style={styles.texto}>Nome</Text>
                    <View style={styles.containerInput}>
                        <TextInput
                            style={styles.inputs} 
                            ref={nome}
                            value={values.nome}
                            onChangeText={handleChange('nome')}
                            onBlur={() => setFieldTouched('nome', true)}
                        />
                        {errors.nome && touched.nome && <Text style={styles.inputError}>{errors.nome}</Text>}
                    </View>

                    <Text style={styles.texto}>URL</Text>
                    <View style={styles.containerInput}>
                        <TextInput
                            style={styles.inputs} 
                            ref={url}
                            value={values.url}
                            onChangeText={handleChange('url')}
                            onBlur={() => setFieldTouched('url', true)}
                        />
                        {errors.url && touched.url && <Text style={styles.inputError}>{errors.url}</Text>}
                    </View>

                    <Text style={styles.texto}>Descrição</Text>
                    <View style={styles.containerInput}>
                        <TextInput
                            style={styles.inputs} 
                            ref={descricao}
                            value={values.descricao}
                            onChangeText={handleChange('descricao')}
                            onBlur={() => setFieldTouched('descricao', true)}
                        />
                        {errors.descricao && touched.descricao && <Text style={styles.inputError}>{errors.descricao}</Text>}
                    </View>

                </View>
                <View>
                    <TouchableOpacity style={styles.btn_entrar} onPress={handleSubmit} >
                        <Text style={styles.textBtn}>
                            Editar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}
        </Formik>
    );
};