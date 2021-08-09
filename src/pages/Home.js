import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/index';

export default function Dashboard({ navigation }) {
    // function navigationToLogin() {
    //     navigation.navigate('Login');
    // }

    // function navigationToCadastro() {
    //     navigation.navigate('Cadastro');
    // }
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Image
                    source={require('../assets/imagens/img5.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.viewFuncionalidades}>
                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Image
                            source={require('../assets/imagens/img4.png')}
                            style={styles.logo1}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>O que é asiedade?</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Image
                            source={require('../assets/imagens/img3.png')}
                            style={styles.logo2}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>Podcast</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Image
                            source={require('../assets/imagens/img2.png')}
                            style={styles.logo3}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>Vídeos</Text>
                    <TouchableOpacity style={styles.btn}>
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
