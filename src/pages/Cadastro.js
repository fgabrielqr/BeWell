import React from 'react';
import { Text, View, TouchableOpacity, Alert, Keyboard, ScrollView } from 'react-native';
import { styles } from '../styles/cadastro';
import api from '../service/api';
import { StatusBar } from 'expo-status-bar';
import { InputForm } from '../components/InputForm';

// import form
import { useForm } from "react-hook-form";
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
    async function handleCreateUser(data) {
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
        } catch (error) {
            console.log(error);
            Alert.alert('Error');
        }

    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <StatusBar
                    animated={true}
                    backgroundColor="#bde4dd" />

                <Text style={styles.texto}>Nome</Text>
                <InputForm name='first_name' control={control} placeholder="Ex: Jubileu"
                    error={errors.first_name && errors.first_name.message}
                />
                <Text style={styles.texto}>Sobrenome</Text>
                <InputForm name='last_name' control={control} placeholder="Ex: Pinto"
                    error={errors.last_name && errors.last_name.message}
                />
                <Text style={styles.texto}>CRP</Text>
                <InputForm name='crp' control={control} placeholder="Ex: 05217"
                    error={errors.crp && errors.crp.message}
                />
                <Text style={styles.texto}>E-mail</Text>
                <InputForm name='email' control={control} placeholder="Ex: jubileu@gmail.com"
                    error={errors.email && errors.email.message}
                />
                <Text style={styles.texto}>Senha</Text>
                <InputForm name='password' control={control} placeholder="Ex: jubileu123"
                    error={errors.password && errors.password.message}
                    secureTextEntry={true}
                />
            </ScrollView>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btn_login} onPress={handleSubmit(handleCreateUser)}>
                    <Text style={styles.textBtn}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};