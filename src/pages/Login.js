import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { styles } from '../styles/login';
import { Input } from '../components/Input';
import api from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../contexts/Auth';


export default function Login({ navigation }) {
   
r
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {signWithBewell} = useAuth();


    //function fazer requisição a api 
    async function handleLogin(){
        
      if(!password || !username){
          Alert.alert("Informe todos os dados");
      }
    
      try{
          return await signWithBewell(username,password);
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