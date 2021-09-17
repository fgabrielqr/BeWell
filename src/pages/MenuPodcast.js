import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/home';
import { useAuth } from '../contexts/Auth';
import { StatusBar } from 'expo-status-bar';

export default function MenuPodcast({ navigation }) {

    const { user, logout, userLoading } = useAuth();

    function navigationToListPodcast() {
        navigation.navigate('ListPodcast');
    }

    function navigationCreatePodcast() {
        navigation.navigate('CadastroPodcast');
    }


    return (
        <View style={styles.btns}>
            <StatusBar
                animated={true}
                backgroundColor="#bde4dd" />

            <TouchableOpacity style={styles.btn_login} onPress={navigationToListPodcast}>
                <Text>
                    Meus Podcasts
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn_login} onPress={navigationCreatePodcast}>
                <Text style={styles.textBtn}>
                    +
                </Text>
            </TouchableOpacity>

        </View>
    );
}