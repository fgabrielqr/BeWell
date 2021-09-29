import React, { useState, useEffect, useContext, useRef } from 'react';
import { useAuth } from '../contexts/Auth';
import { Formik } from 'formik';
import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import * as Yup from 'yup';
import { StatusBar } from 'expo-status-bar';
import { UpdateStyle } from '../styles/update_style';
import api from '../service/api';


export default function UpdateVideos({ route, navigation }) {

    const [usuario, setUsuario] = useState(route.params ? route.params : {})
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useAuth();

    const first_name = useRef(null);
    const last_name = useRef(null);
    const crp = useRef(null);
    const email = useRef(null);

    const FormSchema = Yup.object().shape({
        first_name: Yup.string().required('Campo obrigatório'),
        last_name: Yup.string().required('Campo obrigatório'),
        crp: Yup.string().required('Campo obrigatório'),
        email: Yup.string().required('Campo obrigatório'),
    });


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    //navegation para ir para tela de conta do user
    function navigationToUserConta() {
        navigation.navigate('Conta');
    }


    //function fazer requisição a api 
    async function UpdateUser(data) {
        var body = new FormData();
        body.append('id', usuario.id);
        body.append('password', usuario.password);
        body.append('is_superuser', false);
        body.append('username', data.email);
        body.append('first_name', data.first_name);
        body.append('last_name', data.last_name);
        body.append('is_active', true);
        body.append('crp', data.crp);
        body.append('email', data.email);
        body.append('is_staff', true);

        const headers = {
            'authorization': 'Bearer ' + usuario.tokenUser,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        try {
            const responseUser = await api.put('user/' + usuario.id + '/', body, { headers, body: body });

            const { id, first_name, last_name, crp, email, password, is_superuser, is_active, is_staff } = responseUser.data;
            const userLogged = {
                id: id,
                email: email,
                first_name: first_name,
                last_name: last_name,
                crp: crp,
                tokenUser: usuario.tokenUser,
                password: password,
                is_superuser: is_superuser,
                is_active: is_active,
                is_staff: is_staff

            }
            setUser(userLogged);
            navigationToUserConta();
        } catch (error) {
            console.log(error);
            Alert.alert('Error');
        }

    }


    return (
        <Formik
            initialValues={{
                first_name: usuario.first_name,
                last_name: usuario.last_name,
                crp: usuario.crp,
                email: usuario.email,
            }}
            onSubmit={values => {
                UpdateUser(values);
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
                <View style={UpdateStyle.container}>
                    <StatusBar
                        animated={true}
                        backgroundColor="#bde4dd" />
                    <View style={UpdateStyle.form}>
                        <Text style={UpdateStyle.texto}>Nome</Text>
                        <TextInput
                            style={UpdateStyle.inputs}
                            ref={first_name}
                            value={values.first_name}
                            onChangeText={handleChange('first_name')}
                            onBlur={() => setFieldTouched('first_name', true)}
                        />
                        {errors.first_name && touched.first_name && <Text style={UpdateStyle.inputError}>{errors.first_name}</Text>}
                        <Text style={UpdateStyle.texto}>Sobrenome</Text>
                        <TextInput
                            style={UpdateStyle.inputs}
                            ref={last_name}
                            value={values.last_name}
                            onChangeText={handleChange('last_name')}
                            onBlur={() => setFieldTouched('last_name', true)}
                        />
                        {errors.last_name && touched.last_name && <Text style={styles.inputError}>{errors.last_name}</Text>}
                        <Text style={UpdateStyle.texto}>CRP</Text>
                        <TextInput
                            style={UpdateStyle.inputs}
                            ref={crp}
                            value={values.crp}
                            onChangeText={handleChange('crp')}
                            onBlur={() => setFieldTouched('crp', true)}
                        />
                        {errors.crp && touched.crp && <Text style={styles.inputError}>{errors.crp}</Text>}
                        <Text style={UpdateStyle.texto}>E-mail</Text>
                        <TextInput
                            style={UpdateStyle.inputs}
                            ref={email}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email', true)}
                        />
                        {errors.email && touched.email && <Text style={UpdateStyle.inputError}>{errors.email}</Text>}
                    </View>
                    <View style={UpdateStyle.btnU}>
                        <TouchableOpacity style={UpdateStyle.btn_login} onPress={handleSubmit} >
                            <Text style={UpdateStyle.textBtn}>
                                Editar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    );
};