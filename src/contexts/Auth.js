import React, { useState, useEffect, createContext, useContext} from 'react';
import { Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import api from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();


function AuthProvider({children}){
    const [user,setUser] = useState({});
    const [userLoading, setUserLoading] = useState(true);
    

    const keyAsyncStorage = "@bewell1:user";

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
            setUserLoading(false);
        }catch(error){
            console.log(error);
            setUserLoading(false);
            console.log('Aqui');
        }
    }

    async function updateToken(usuario){
        var params = new URLSearchParams();
        params.append('refresh', usuario.refresh);
        
        const {data} = await api.post('api/token/refresh/', params);

        const userLogged = {
            id: usuario.id,
            email:usuario.email,
            first_name:usuario.first_name,
            last_name: usuario.last_name,
            crp: usuario.crp, 
            tokenUser:data.access,
            refresh : usuario.refresh, 
            password:usuario.password, 
            is_superuser:usuario.is_superuser, 
            is_active:usuario.is_active,
            is_staff:usuario.is_staff

        }
        setUser(userLogged);

        await AsyncStorage.removeItem(keyAsyncStorage);
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(userLogged));
    }

    //Função para realizar o refresh do token
    async function refreshToken() {
        
        const userStoraged = await AsyncStorage.getItem(keyAsyncStorage);
          
          if(userStoraged){
            const userLogged = JSON.parse(userStoraged);
           
            api.interceptors.response.use(response => {
                return response
              }, err => {
                return new Promise((resolve, reject) => {
                  const originalReq = err.config
                  if (err.response.status == 401){
                    originalReq._retry = true
                    console.log("ok");
                    updateToken(userLogged);
                  }else{
                    reject(err)
                  }
                })
            })
        }   
    }
        
    


    //Função para fazer o logout e remover o user do 
    async function logout(){
        setUser({});
        await AsyncStorage.removeItem(keyAsyncStorage);
    }

    //Função do load para recarregar os dados 
    async function loadUser() {
        setUserLoading(true);
        const userStoraged = await AsyncStorage.getItem(keyAsyncStorage);
        
        if(userStoraged){
          const userLogged = JSON.parse(userStoraged);
          setUser(userLogged);
        }
        setUserLoading(false);
    }

    useEffect(() => {   
        loadUser();
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