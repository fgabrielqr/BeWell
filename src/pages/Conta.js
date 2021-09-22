import React, { useState, useEffect} from 'react';
import { Text, View, TouchableOpacity , StyleSheet} from 'react-native';
import { ItemUser } from '../components/ItemUser';
import { useAuth } from '../contexts/Auth';
import { styles } from '../styles/cadastro';

export default function Conta({ navigation }) {

    const {user, logout, userLoading} = useAuth();
    const[isLoading,setIsLoading] = useState(false);

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

    return (
        <View style={style.container}>
            <ItemUser data={user} />

             <View>
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
})