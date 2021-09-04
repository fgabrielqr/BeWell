import React, { useState, useEffect, useContext} from 'react';
import { Text, View, Modal, TouchableOpacity, Alert, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import { styles } from '../styles/cadastro';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import  {Item}  from '../components/Item'


export default function ListPodcast({navigation}) {

    const {user, logout, userLoading} = useAuth();
    const [podcast,setPodcast] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);


    function navigationToListPodcast() {
        navigation.navigate('ListPodcast');
    }

    async function handleDeletePodcast(id) {
         console.log(id);      
         const headers = { 
            'authorization': 'Bearer ' + user.tokenUser,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'  
        }; 

        try {
            const responsePodcast =  await api.delete('podcasts/' +id+'/', { headers} );
            navigationToListPodcast();
        }catch(error){
            console.log(error);
            Alert.alert('Error');
        }
    }

    //function para listar podcasts 
    async function handleListPodcast(){
       
      try {
        //Requisição a api 
        const responsePodcast =  await  api.get('meus-podcasts/', { 
            headers:{
                'authorization': 'Bearer ' + user.tokenUser,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'    
            }
        } );
        //Pegando o data do response da api
        const data = responsePodcast.data
        setPodcast(data); //Setando o data para o podcast
    
      }catch(error){
            console.log(error);
            Alert.alert('Error');
      }
    }
    
    useEffect( ()=>{
        handleListPodcast(); 
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
                        <Item data={item}  navigation={navigation} apagar={ () => handleDeletePodcast(item.id) }/>
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
}

