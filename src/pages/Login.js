import React, { useState} from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/login';
import { Input } from '../components/Input';
import api from '../service/api';

export default function Login({ navigation }) {
   
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    async function handleLogin(){
        var params = new URLSearchParams();
        params.append('email', email);
        params.append('password', senha); 

        console.log(email);

      try {
            const responseToken = await api.get('api/token/', params);
            const {token} = responseToken.data;
            console.log(token)
            setEmail(''); 
            setSenha(''); 
            Keyboard.dismiss(); 
            navigation.navigate('Home')
      }catch(error){
        Alert.alert('Error');
      }
    }




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