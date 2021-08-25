import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { styles } from '../styles/login';
import { Input } from '../components/Input';
import api from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }) {
   
    const keyAsyncStorage = "@bewell:login";

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


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
          console.log(response.data);
          navigation.navigate('Home');
  
        } catch(error){
          console.log("Error Login"); 
        }
      }


    //function fazer requisição a api 
    async function handleLogin(){
        var params = new URLSearchParams();
        params.append('email', email);
        params.append('password', senha); 

      try {
            const responseToken = await api.post('api/token/', params);
            const response = responseToken.data;
            const token = response.access;
            console.log(token);
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(token));
            //console.log(token);
            setEmail(''); 
            setSenha(''); 
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
  
    useEffect( ()=> {
       autenticationUser();
    }, []);

    return (
        <View>
            <View style={styles.form}>
                <Text style={styles.texto}>E-mail</Text>
                <Input label='E-mail/Username' onChangeText = {text => setEmail(text)}/>
            
                <Text style={styles.texto}>Senha</Text>
                <Input label='Senha' senha={true} onChangeText = {text => setSenha(text)}/>

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