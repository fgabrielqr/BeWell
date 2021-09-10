import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { styles } from '../styles/login';
import { Input } from '../components/Input';
import api from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../contexts/Auth';
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

});


export default function Login({ navigation }) {

    // constante retornadas pelo react-hook-form
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const {signWithBewell} = useAuth();


    function navigationToCreatUser() {
        navigation.navigate('Cadastro');
    }


    //function fazer requisição a api 
    async function handleLogin(data){
        
       
      try{
          return await signWithBewell(data.email,data.password);
       }catch(error){
           console.log(error);
           Alert.alert("Erro");
       } 
    }

    async function clear() {
        await AsyncStorage.clear();
    }
  
    

    return (
        <View>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
            <View style={styles.form}>
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
                <TouchableOpacity style={styles.btn_login} onPress={handleSubmit (handleLogin)}>
                    <Text style={styles.textBtn}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};