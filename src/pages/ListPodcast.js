import React, { useState, useEffect, useContext} from 'react';
import { Text, View, Modal, TouchableOpacity, Alert, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import { styles } from '../styles/cadastro';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import  {Item}  from '../components/Item'
import  {FabButton}  from '../components/FabButton'


export default function ListPodcast({navigation}) {

    const {user, logout, userLoading} = useAuth();
    const [podcast,setPodcast] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [podcastDelete, setPodcastDelete] = useState();

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

    function navigationToListPodcast() {
        navigation.navigate('ListPodcast');
    }

    function navigationCreatePodcast() {
        navigation.navigate('CadastroPodcast');
    }

    async function handleModalPodcast(id) {
        console.log(id);      
        setModalVisible(true);
        setPodcastDelete(id);
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
                <FlatList  data={podcast}  
                    keyExtractor={item => item.id.toString()} 
                    renderItem={ ({item}) =>  (
                        <Item data={item}  navigation={navigation} apagar={ () => handleModalPodcast(item.id) }/>
                    ) }
                />
            </View>

            <FabButton
                style={{bottom: 80, right:60}}
                    create={ () => navigationCreatePodcast()}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
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