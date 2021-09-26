import React, { useState, useEffect} from 'react';
import { Text, View, Modal, Alert, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { StatusBar } from 'expo-status-bar';
import  {Itens}  from '../components/Itens'
import  {FabButton}  from '../components/FabButton'
import { style } from '../styles/listarVideo';

export default function ListVideos({navigation}) {

    const {user} = useAuth();
    const [videos,setVideos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [videosDelete, setVideosDelete] = useState();
    const [load,setLoad] = useState(true);
    const[isLoading,setIsLoading] = useState(false);


    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 

    //function para deletar videos
    async function handleDeleteVideos(id) {

        const headers = { 
            'authorization': 'Bearer ' + user.tokenUser,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'  
        }; 

       try {
           const responseVideos =  await api.delete('videos/' +id+'/', { headers} );
           setModalVisible(!modalVisible);
           navigationToListVideos();
       }catch(error){
           console.log(error);
           Alert.alert('Error');
       }
    }

    //navegation para a lista de videos
    function navigationToListVideos() {
        navigation.navigate('ListVideos');
    }

    //navegation para o create
    function navigationCreateVideos() {
        navigation.navigate('CreateVideos');
    }

    //handle modal de videos
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
            //Alert.alert('Error');
      }
    }
    
    useEffect( ()=>{
        handleListVideos();
        navigation.addListener('focus', ()=>setLoad(!load));
    }, [load, navigation]);

    return (
        <View style={style.container}>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
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
            </View>
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