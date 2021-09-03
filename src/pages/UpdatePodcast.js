import React, { useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity, Alert, FlatList} from 'react-native';
import { styles } from '../styles/cadastro';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { StatusBar } from 'expo-status-bar';
import { Input } from '../components/Input';


export default function UpdatePodcast() {

    const {user, logout, userLoading} = useAuth();
    const [podcast,setPodcast] = useState([]);


    //function fazer requisição a api 
    async function handleSearchePodcast(){
       
      try {
        console.log(user.tokenUser);

        const responsePodcast =  await  api.get('podcasts/' + user.id, { 
            headers:{
                'authorization': 'Bearer ' + user.tokenUser,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'    
            }
        } );
        const data = responsePodcast.data
        setPodcast(data);
        console.log(data)

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

            <Input label='Nome' value={user.nome} />
           
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