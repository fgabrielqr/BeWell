import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/home';
import { useAuth } from '../contexts/Auth';
import { StatusBar } from 'expo-status-bar';

export default function MenuPodcast({ navigation }) {

    const {user, logout, userLoading} = useAuth();

    function navigationToListPodcast() {
        navigation.navigate('ListPodcast');
    }


    function navigationEditarPodcast() {
        navigation.navigate('CadastroPodcast', user);
    }

    function navigationCreatePodcast() {
        navigation.navigate('CadastroPodcast');
    }

   
    return (
        <View>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
            <View>
                <TouchableOpacity style={styles.btn_login} onPress={navigationToListPodcast}>
                    <Text style={styles.textBtn}>
                        Meus Podcasts
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={navigationEditarPodcast}>
                    <Text style={styles.textBtn}>
                        Editar
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={navigationCreatePodcast}>
                    <Text style={styles.textBtn}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}