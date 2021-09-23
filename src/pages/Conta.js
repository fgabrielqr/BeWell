import React, { useState, useEffect} from 'react';
import { Text, View, TouchableOpacity , StyleSheet} from 'react-native';
import { ItemUser } from '../components/ItemUser';
import { useAuth } from '../contexts/Auth';
import { styles } from '../styles/cadastro';
import api from '../service/api';

export default function Conta({ navigation }) {

    const {user, logout, userLoading} = useAuth();
    const[isLoading,setIsLoading] = useState(false);
    const [load,setLoad] = useState(true);
    const [userLoad, setUserLoad] = useState({});

    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 
    
    function navigationToUdateUser() {
        navigation.navigate('UpdateUser', user);
    }



    //function para listar podcasts 
    async function handleInfoUser() {

        id = user.id

        try {
            //Requisição a api 
             const response = await api.get('user/' + id + '/', {
                 headers: {
                    'authorization': 'Bearer ' + user.tokenUser,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            // //Pegando o data do response da api
            const data = response.data
            setUserLoad(data);
        } catch (error) {
            console.log(error);
            Alert.alert('Error');
        }
    }
    
    useEffect( ()=>{
        handleInfoUser();
        navigation.addListener('focus', ()=>setLoad(!load));
    }, [load, navigation]);


    return (
        <View style={style.container}>
            <ItemUser data={userLoad} />

             <View style={style.btn}>
                <TouchableOpacity style={styles.btn_login} onPress={navigationToUdateUser}>
                    <Text style={styles.textBtn}>
                        Editar Perfil
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    info:{
        fontSize:20, 
        padding:20,
    },
    btn:{
        margin:50
    }
})