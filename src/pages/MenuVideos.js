import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/home';
import { useAuth } from '../contexts/Auth';
import { StatusBar } from 'expo-status-bar';

export default function MenuVideos({ navigation }) {

    const {user, logout, userLoading} = useAuth();

    function navigationToListVideos() {
        navigation.navigate('ListVideos');
    }

    function navigationCreateVideos() {
        navigation.navigate('CadastroVideos');
    }

   
    return (
        <View>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
            <View>
                <TouchableOpacity style={styles.btn_login} onPress={navigationToListVideos}>
                    <Text style={styles.textBtn}>
                        Meus Videos
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} onPress={navigationCreateVideos}>
                    <Text style={styles.textBtn}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}