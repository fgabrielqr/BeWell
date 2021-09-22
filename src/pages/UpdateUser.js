import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { StatusBar } from 'expo-status-bar';

export default function UpdateUser({route, navigation }) {
    const [user, setUser] = useState(route.params ? route.params : {})
    const[isLoading,setIsLoading] = useState(false);

    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 


    //function fazer requisição a api 
    async function UpdateUser(){
        var body = new FormData();
        body.append('id', user.id);
        body.append('password', user.password);
        body.append('is_superuser', false);
        body.append('username', user.email);
        body.append('first_name', user.first_name);
        body.append('last_name', user.last_name);
        body.append('is_active', true);
        body.append('crp', user.crp);
        body.append('email', user.email);
        body.append('is_staff', true);
        
        console.log(body)

        const headers = { 
            'authorization': 'Bearer ' + user.tokenUser,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'  
        };
        url = 'user/' +user.id+'/'
        console.log(url)
        try {
            const responseUser =  await api.put('user/' +user.id+'/', body, { headers, body: body } );
            console.log(responseUser)
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
                <Input label='Nome' onChangeText = {first_name => setUser({...user, first_name})}   value={user.first_name}/>
                <Text style={styles.texto}>Sobrenome</Text>
                <Input label='Sobrenome' onChangeText = {last_name => setUser({...user, last_name})}   value={user.last_name}/>
                <Text style={styles.texto}>CRP</Text>
                <Input label='CRP' onChangeText = {crp => setUser({...user, crp})}   value={user.crp}/>
                <Text style={styles.texto}>CRP</Text>
                <Input label='email' onChangeText = {email => setUser({...user, email})}   value={user.email}/>
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={UpdateUser}>
                    <Text style={styles.textBtn}>
                        Editar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};