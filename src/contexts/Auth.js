import React, { useState, useEffect, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import api from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();


function AuthProvider({children}){
    const [user,setUser] = useState({});
    const [userLoading, setUserLoading] = useState(true);

    const keyAsyncStorage = "@bewell:user";

    async function signWithBewell(username, password){

        var params = new URLSearchParams();
            params.append('email', username);
            params.append('password', password); 

        try {
            
            const responseToken = await api.post('api/token/', params);
            const response = responseToken.data;
            const token = response.access;            
            const responseUser =  await  api.get('/meus-dados/', { 
                headers:{
                    'authorization': 'Bearer ' + token,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'    
                }
            } );
            
            const {id, first_name, last_name, crp, email} = responseUser.data[0]; 

            const userLogged = {
                id: id,
                email:email,
                first_name:first_name,
                last_name: last_name,
                crp: crp                
            }
            setUser(userLogged);
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(userLogged));

            console.log(user);

        }catch(error){
            console.log(error);
            Alert.alert('Error');
        }
    }

    //Função para fazer o logout e remover o user do 
    async function logout(){
        setUser({});
        await AsyncStorage.removeItem(keyAsyncStorage);
    }

    //Função do load para recarregar os dados 
    async function loadUser() {
        const userStoraged = await AsyncStorage.getItem(keyAsyncStorage);
        
        if(userStoraged){
          const userLogged = JSON.parse(userStoraged);
          setUser(userLogged);
        }
    }


    useEffect(() => {   
        loadUser();
        setUserLoading(false);
    },[]);


    return(
        <AuthContext.Provider value={{user, signWithBewell, userLoading}}>
            { children }
        </AuthContext.Provider>
        
    )
}

function useAuth(){
    const context = useContext(AuthContext);
  
    return context;
  }
  

export { AuthProvider, useAuth }