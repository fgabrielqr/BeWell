import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { styles } from '../styles/login';
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

    const { signWithBewell } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    //function fazer requisição a api 
    async function handleLogin(data) {


        try {
            setIsLoading(true);
            return await signWithBewell(data.email, data.password);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            Alert.alert("Verifique seus dados!");
        }
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#bde4dd" />
            <View style={styles.form}>
                <Text style={styles.texto}>E-mail</Text>
                <InputForm name='email' control={control} placeholder="Ex: jubileu@gmail.com"
                    error={errors.email && errors.email.message}
                />
                <Text style={styles.texto}>Senha</Text>
                <InputForm name='password' control={control} placeholder="Ex: Sua senha"
                    error={errors.password && errors.password.message}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btn_login} onPress={handleSubmit(handleLogin)}>
                    <Text style={styles.textBtn}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};