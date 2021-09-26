import React, { useState, useEffect, createContext, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import api from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();


function AuthProvider({children}){
    const [user,setUser] = useState({});
    const [userLoading, setUserLoading] = useState(true);
    

    const keyAsyncStorage = "@bewell:user";

    //função para realiza login no na api 
    async function signWithBewell(username, password){

        var params = new URLSearchParams();
            params.append('email', username);
            params.append('password', password); 

        try {
            
            const responseToken = await api.post('api/token/', params);
            const response = responseToken.data;
            const token = response.access;
            const refresh = response.refresh;  
            const responseUser =  await  api.get('/meus-dados/', { 
                headers:{
                    'authorization': 'Bearer ' + token,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'    
                }
            } );
            
            const {id, first_name, last_name, crp, email, password, is_superuser,is_active,is_staff } = responseUser.data[0]; 

            const userLogged = {
                id: id,
                email:email,
                first_name:first_name,
                last_name: last_name,
                crp: crp, 
                tokenUser:token,
                refresh : refresh, 
                password:password, 
                is_superuser:is_superuser, 
                is_active:is_active,
                is_staff:is_staff

            }
            setUser(userLogged);
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(userLogged));
        }catch(error){
            console.log(error);
            console.log('Aqui');
        }
    }


    //Função para realizar o refresh do token
    async function refreshToken() {

        if (JSON.stringify(user) != JSON.stringify({})) {
            var success = true;

            try {
                const responseUser =  await  api.get('/meus-dados/', { 
                    headers:{
                        'authorization': 'Bearer ' + user.tokenUser,
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json'    
                    }
                } );
                
            } catch {
                success = false;
                console.log('errorToken');
            }
        }

        if (!success){
            try {
                var params = new URLSearchParams();
                params.append('refresh', user.refresh);
                
                const {data} = await api.post('api/token/refresh/', params);

                console.log(data);

                const userLogged = {
                    id: user.id,
                    email:user.email,
                    first_name:user.first_name,
                    last_name: user.last_name,
                    crp: user.crp, 
                    tokenUser:data.access,
                    refresh : user.refresh, 
                    password:user.password, 
                    is_superuser:user.is_superuser, 
                    is_active:user.is_active,
                    is_staff:user.is_staff
    
                }
                setUser(userLogged);

                await AsyncStorage.removeItem(keyAsyncStorage);
                await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(userLogged));

            } catch {
                console.log('errorRefresh')
                logout();
            }
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
        <AuthContext.Provider value={{user, logout, signWithBewell, userLoading, setUser, refreshToken}}>
            { children }
        </AuthContext.Provider>
        
    )
}

function useAuth(){
    const context = useContext(AuthContext);
  
    return context;
  }
  

export { AuthProvider, useAuth }