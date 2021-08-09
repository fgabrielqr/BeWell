import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/home';

export default function Home({ navigation }) {
    function navigationToAnsiedade() {
        navigation.navigate('Ansiedade');
    }

    function navigationToVideo() {
        navigation.navigate('Videos');
    }

    function navigationToPodcast() {
        navigation.navigate('Podcast');
    }

    function navigationToAutocuidado() {
        navigation.navigate('Autocuidado');
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Image style={styles.img} />
                <View style={styles.viewLogo1}>

                    <Text style={styles.ti}>
                        Olá, Felipe
                    </Text>
                    <Text style={styles.ti1}>
                        Hoje é dia de melhorar sua mente!
                    </Text>
                </View>
                <Image
                    source={require('../assets/imagens/img5.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.viewFuncionalidades}>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={navigationToAnsiedade}>
                        <Image
                            source={require('../assets/imagens/img4.png')}
                            style={styles.logo1}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>O que é asiedade?</Text>
                    <TouchableOpacity style={styles.btn} onPress={navigationToPodcast}>
                        <Image
                            source={require('../assets/imagens/img3.png')}
                            style={styles.logo2}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>Podcast</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.btn} onPress={navigationToVideo}>
                        <Image
                            source={require('../assets/imagens/img2.png')}
                            style={styles.logo3}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>Vídeos</Text>
                    <TouchableOpacity style={styles.btn} onPress={navigationToAutocuidado}>
                        <Image
                            source={require('../assets/imagens/img1.png')}
                            style={styles.logo4}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>Autocuidado</Text>
                </View>
            </View>
        </View>
    );
}