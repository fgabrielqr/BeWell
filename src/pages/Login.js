import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { styles } from '../styles/login';
import { Input } from '../components/Input';
import api from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SimplesContext from '../contexts/SimplesContext';


export default function Login({ navigation }) {
   
    const keyAsyncStorage = "@bewell:login";

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {nome, setNome, email, setEmail, senha, setSenha} = useContext(SimplesContext);


    async function autenticationUser(){
        try {
          const retorno = await AsyncStorage.getItem(keyAsyncStorage); 
          const parseJson = JSON.parse(retorno); 
  
          token = (parseJson || '');  
  
          const response = await api.get('/meus-dados/',{
            headers:{
                'authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          });
          const data = response.data[0]; 
          console.log(data.id);

          navigation.navigate('Home');
  
        } catch(error){
          console.log("Error Login"); 
        }
      }


    //function fazer requisição a api 
    async function handleLogin(){
        var params = new URLSearchParams();
        params.append('email', username);
        params.append('password', password); 

      try {
            const responseToken = await api.post('api/token/', params);
            const response = responseToken.data;
            const token = response.access;
            console.log(token);
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(token));
            //console.log(token);
            setUsername(''); 
            setPassword(''); 
            Keyboard.dismiss(); 

            autenticationUser();
      }catch(error){
            console.log(error);
            Alert.alert('Error');
      }
    }

    async function clear() {
        await AsyncStorage.clear();
      }
  
    

    return (
        <View>
            <View style={styles.form}>
                <Text style={styles.texto}>E-mail</Text>
                <Input label='E-mail/Username' onChangeText = {text => setUsername(text)}/>
            
                <Text style={styles.texto}>Senha</Text>
                <Input label='Senha' senha={true} onChangeText = {text => setPassword(text)}/>

            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={handleLogin}>
                    <Text style={styles.textBtn}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};