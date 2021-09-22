import React, { useState, useEffect } from 'react';
import { Text, View, Modal, Alert, FlatList, TouchableHighlight } from 'react-native';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { StatusBar } from 'expo-status-bar';
import { Item } from '../components/Item';
import { FabButton } from '../components/FabButton';
import { style } from '../styles/listarPodcast';

export default function ListPodcast({ navigation }) {

    const { user } = useAuth();
    const [podcast, setPodcast] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [podcastDelete, setPodcastDelete] = useState();
    const [load,setLoad] = useState(true);
    const[isLoading,setIsLoading] = useState(false);

    
    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 

    //Função para deletar podcast
    async function handleDeletePodcast(id) {
        const headers = { 
           'authorization': 'Bearer ' + user.tokenUser,
           'Accept' : 'application/json',
           'Content-Type': 'application/json'  
        }; 

       try {
           const responsePodcast =  await api.delete('podcasts/' +id+'/', { headers} );
           navigationToListPodcast();
           setModalVisible(!modalVisible)
       }catch(error){
           console.log(error);
           Alert.alert('Error');
       }
             
    }

    //Função para naveção para lista de podcast
    function navigationToListPodcast() {
        navigation.navigate('ListPodcast');
    }

    //Função para naveção para cadastro de podcast
    function navigationCreatePodcast() {
        navigation.navigate('CadastroPodcast');
    }

    //Função para o model
    async function handleModalPodcast(id) {
        console.log(id);
        setModalVisible(true);
        setPodcastDelete(id);
    }

    //function para listar podcasts 
    async function handleListPodcast() {

        try {
            //Requisição a api 
            const responsePodcast = await api.get('meus-podcasts/', {
                headers: {
                    'authorization': 'Bearer ' + user.tokenUser,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            //Pegando o data do response da api
            const data = responsePodcast.data
            setPodcast(data); //Setando o data para o podcast

        } catch (error) {
            console.log(error);
            Alert.alert('Error');
        }
    }
    
    useEffect( ()=>{
        handleListPodcast();
        navigation.addListener('focus', ()=>setLoad(!load));
    }, [load, navigation]);

    

    return (
        <View style={style.container}>
            <StatusBar
                animated={true}
                backgroundColor="#bde4dd" />
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
                                    onPress={() => handleDeletePodcast(podcastDelete)}
                                >
                                    <Text style={style.textStyle}>Sim</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <View>
                <FlatList data={podcast}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Item data={item} navigation={navigation} apagar={() => handleModalPodcast(item.id)} />
                    )}
                />
            </View>
            <FabButton
                style={{ bottom: 80, right: 60 }}
                create={() => navigationCreatePodcast()}
            />
        </View>
    )
}