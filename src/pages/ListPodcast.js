import React, { useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity, Alert, FlatList} from 'react-native';
import { styles } from '../styles/cadastro';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import  {Item}  from '../components/Item'


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
        const data = responsePodcast.data
        setPodcast(data);
        
        


      }catch(error){
            console.log(error);
            Alert.alert('Error');
      }
    }
    
    useEffect( ()=>{
        handleSearchePodcast(); 
        console.log(podcast);     
    }, []);

    return (
        <View>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
            <View>
                <FlatList  data={podcast}  
                    keyExtractor={item => item.id.toString()} 
                    renderItem={ ({item}) =>  (
                        <Item data={item}/>
                    ) }
                />
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