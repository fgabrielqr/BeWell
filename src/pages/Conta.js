import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
    const { user } = useAuth();

    function navigationToUdateUser() {
        navigation.navigate('UpdateUser', user);
    }

    return (
        <View>
            <Text>
                Conta
            </Text>
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