import React, { useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/cadastro';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';


export default function ListPodcast() {

    const {user, logout, userLoading} = useAuth();
    const [podcast,setPodcast] = useState([]);


    //function fazer requisição a api 
    async function handleSearchePodcast(){
       
      try {
        console.log(user.tokenUser);

        const responsePodcast =  await  api.get('meus-podcasts/', { 
            headers:{
                'authorization': 'Bearer ' + user.tokenUser,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'    
            }
        } );
        const [data] = responsePodcast
        setPodcast(data);
        console.log(data);
        


      }catch(error){
            console.log(error);
            Alert.alert('Error');
      }
    }
    
    useEffect( ()=>{
        handleSearchePodcast();      
    }, []);

    return (
        <View>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
            <View style={styles.form}>

            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={logout}>
                    <Text style={styles.textBtn}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};