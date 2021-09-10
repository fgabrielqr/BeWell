import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { StatusBar } from 'expo-status-bar';
import { InputForm } from '../components/InputForm';

// import form
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// YUP
const schema = yup.object().shape({
    email: yup.string().required('informe o e-mail'),
    password: yup.string().required('Informe a senha'),
    first_name: yup.string().required("Informe o nome"),
    last_name: yup.string().required("Informe o Sobrenome"),
    crp: yup.string().required("Informe o crp"),

});


export default function Cadastro({ navigation }) {

    // constante retornadas pelo react-hook-form
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    //function fazer requisição a api 
    async function handleCreateUser(data){
        var params = new URLSearchParams();
        params.append('email', data.email);
        params.append('username', data.email);
        params.append('password', data.password); 
        params.append('first_name', data.first_name);
        params.append('last_name', data.last_name);
        params.append('crp', data.crp);
        params.append('is_active', true);
        params.append('is_staff', true);

        try {
            const response = await api.post('cadastro/', params);
            Keyboard.dismiss(); 
            navigation.navigate('Login')
        }catch(error){
            console.log(error);
            Alert.alert('Error');
      }

    }

    return (
        <View>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
            <View style={styles.form}>
                <InputForm name='first_name' control={control} 
                    placeholder="Nome"
                    error={ errors.first_name && errors.first_name.message } 
                />
                <InputForm name='last_name' control={control} 
                    placeholder="Sobrenome"
                    error={ errors.last_name && errors.last_name.message } 
                />
                <InputForm name='crp' control={control} 
                    placeholder="Crp"
                    error={ errors.crp && errors.crp.message } 
                />
                <InputForm name='email' control={control} 
                    placeholder="Email"
                    error={ errors.email && errors.email.message } 
                />
                <InputForm name='password' control={control} 
                    placeholder="Senha"
                    error={ errors.password && errors.password.message } 
                    password={true}
                />
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={handleSubmit ( handleCreateUser )}>
                    <Text style={styles.textBtn}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};