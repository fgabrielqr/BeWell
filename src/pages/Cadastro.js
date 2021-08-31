import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { StatusBar } from 'expo-status-bar';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [crp, setCrp] = useState('');


    //function fazer requisição a api 
    async function handleCreateUser(){
        var params = new URLSearchParams();
        params.append('email', email);
        params.append('username', email);
        params.append('password', password); 
        params.append('first_name', first_name);
        params.append('last_name', last_name);
        params.append('crp', crp);
        params.append('is_active', true);
        params.append('is_staff', true);

        //is_active

      try {
            const response = await api.post('cadastro/', params);
            console.log(response);
            setEmail(''); 
            setPassword('');
            setFirst_name('');
            setLast_name('');
            setCrp(''); 
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
                <Text style={styles.texto}>Nome</Text>
                <Input label='Nome' onChangeText = {text => setFirst_name(text)}/>
                <Text style={styles.texto}>Sobrenome</Text>
                <Input label='Sobrenome' onChangeText = {text => setLast_name(text)}/>
                <Text style={styles.texto}>CRP</Text>
                <Input label='CRP' onChangeText = {text => setCrp(text)}/>
                <Text style={styles.texto}>E-mail</Text>
                <Input label='E-mail/Username' onChangeText = {text => setEmail(text)}/>
                <Text style={styles.texto}>Senha</Text>
                <Input label='Senha' senha={true} onChangeText = {text => setPassword(text)}/>
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={handleCreateUser}>
                    <Text style={styles.textBtn}>
                        CADASTRAR
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};