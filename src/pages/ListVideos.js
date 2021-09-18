import React, { useState, useEffect, useContext} from 'react';
import { Text, View, Modal, TouchableOpacity, Alert, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import { styles } from '../styles/home';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import  {Itens}  from '../components/Itens'
import  {FabButton}  from '../components/FabButton'

export default function ListVideos({navigation}) {

    const {user, logout, userLoading} = useAuth();
    const [videos,setVideos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [videosDelete, setVideosDelete] = useState();

    async function handleDeleteVideos(id) {
        console.log(id);      
        const headers = { 
            'authorization': 'Bearer ' + user.tokenUser,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'  
        }; 

       try {
           const responseVideos =  await api.delete('videos/' +id+'/', { headers} );
           navigationToListVideos();
           setModalVisible(!modalVisible)
       }catch(error){
           console.log(error);
           Alert.alert('Error');
       }
   }

    function navigationToListVideos() {
        navigation.navigate('ListVideos');
    }


    function navigationCreateVideos() {
        navigation.navigate('CreateVideos');
    }

    async function handleModalVideos(id) {
        setModalVisible(true);
        setVideosDelete(id);
    }

    //function para listar videos 
    async function handleListVideos(){
       
      try {
        //Requisição a api 
        const responseVideos =  await  api.get('meus-videos/', { 
            headers:{
                'authorization': 'Bearer ' + user.tokenUser,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'    
            }
        } );
        //Pegando o data do response da api
        const data = responseVideos.data
        setVideos(data); //Setando o data para o videos
    
      }catch(error){
            console.log(error);
            Alert.alert('Error');
      }
    }
    
    useEffect( ()=>{
        handleListVideos(); 
    }, []);

    return (
        <View style={style.container}>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
       
       <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("O Modal foi fechado.");
                    setModalVisible(!modalVisible);
                    }}>
                    <View style={style.centeredView}>
                        <View style={style.modalView}>
                            <Text style={style.modalText}>Deseja Exluir ?</Text>

                            <View style={style.btns_modal}>
                                <TouchableHighlight
                                    style={[style.button, style.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                    >
                                    <Text style={style.textStyle}>Não</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={[style.button, style.buttonOpen]}
                                    onPress={() => handleDeleteVideos(videosDelete)}
                                    >
                                    <Text style={style.textStyle}>Sim</Text>
                                </TouchableHighlight>
                            </View>
        
                        </View>
                    </View>
                </Modal>
    

            <View>
                <FlatList  data={videos}  
                    keyExtractor={item => item.id.toString()} 
                    renderItem={ ({item}) =>  (
                        <Itens data={item}  navigation={navigation} apagar={ () => handleModalVideos(item.id) }/>
                    ) }
                />
            </View>
            <FabButton
                style={{bottom: 80, right:60}}
                create={ () => navigationCreateVideos()}
            />

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },

  });