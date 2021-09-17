import React, { useState, useEffect, useContext} from 'react';
import { Text, View, Modal, TouchableOpacity, Alert, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import { styles } from '../styles/cadastro';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import  {Itens}  from '../components/Itens'


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
        <View>
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
        </View>
    )
}

const style = StyleSheet.create({
    centeredView: {
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 5,
      padding: 35,
      justifyContent: "space-evenly",
      alignItems: "center",
      shadowColor: "#000",
      width: '50%',
      height: '20%',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText:{

    },
    btns_modal:{
        flexDirection: 'row',
        alignItems:'center',
    },
    button: {
        borderRadius: 5,
        elevation: 2
    },
    buttonOpen:{
        backgroundColor:'#23cf5c', 
        margin: 20,
        padding:10
    },
    buttonClose:{
        backgroundColor:'#d12c38',
        margin: 20,
        padding:10

    }
    

  });

