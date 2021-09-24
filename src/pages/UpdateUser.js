import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../contexts/Auth';


export default function UpdateUser({route, navigation }) {
    const [usuario, setUsuario] = useState(route.params ? route.params : {})
    const[isLoading,setIsLoading] = useState(false);
    const {user, setUser} = useAuth();

    

    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 

    //navegation para ir para tela de conta do user
    function navigationToUserConta() {
        navigation.navigate('Conta');
    }


    //function fazer requisição a api 
    async function UpdateUser(){
        var body = new FormData();
        body.append('id', usuario.id);
        body.append('password', usuario.password);
        body.append('is_superuser', false);
        body.append('username', usuario.email);
        body.append('first_name', usuario.first_name);
        body.append('last_name', usuario.last_name);
        body.append('is_active', true);
        body.append('crp', usuario.crp);
        body.append('email', usuario.email);
        body.append('is_staff', true);
        
        const headers = { 
            'authorization': 'Bearer ' + usuario.tokenUser,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'  
        };

        try {
            const responseUser =  await api.put('user/' +usuario.id+'/', body, { headers, body: body } );
            
            const {id, first_name, last_name, crp, email, password, is_superuser,is_active,is_staff } = responseUser.data; 
            const userLogged = {
                id: id,
                email:email,
                first_name:first_name,
                last_name: last_name,
                crp: crp, 
                tokenUser:usuario.tokenUser, 
                password:password, 
                is_superuser:is_superuser, 
                is_active:is_active,
                is_staff:is_staff

            }
            setUser(userLogged);
            navigationToUserConta();
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
                <Input label='Nome' onChangeText = {first_name => setUsuario({...usuario, first_name})}   value={user.first_name}/>
                <Text style={styles.texto}>Sobrenome</Text>
                <Input label='Sobrenome' onChangeText = {last_name => setUsuario({...usuario, last_name})}   value={user.last_name}/>
                <Text style={styles.texto}>CRP</Text>
                <Input label='CRP' onChangeText = {crp => setUsuario({...usuario, crp})}   value={user.crp}/>
                <Text style={styles.texto}>CRP</Text>
                <Input label='email' onChangeText = {email => setUsuario({...usuario, email})}   value={user.email}/>
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