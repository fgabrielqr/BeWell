import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/index';

export default function Dashboard({ navigation }) {
    function navigationToLogin() {
        navigation.navigate('Login');
    }

    function navigationToCadastro() {
        navigation.navigate('Cadastro');
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Text style={styles.title}>BeWell</Text>
            </View>

            <View style={styles.viewFuncionalidades}>
                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Image
                            source={require('../assets/imagens/img4.png')}
                            style={styles.logo1}
                        />
                        {/* <Text style={styles.title}>BeWell</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Image
                            source={require('../assets/imagens/img3.png')}
                            style={styles.logo2}
                        />
                        {/* <Text style={styles.title}>BeWell</Text> */}
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Image
                            source={require('../assets/imagens/img2.png')}
                            style={styles.logo3}
                        />
                        {/* <Text style={styles.title}>BeWell</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Image
                            source={require('../assets/imagens/img1.png')}
                            style={styles.logo4}
                        />
                        {/* <Text style={styles.title}>BeWell</Text> */}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.viewButtons}>
                <View>
                    <TouchableOpacity style={styles.btn_login} onPress={navigationToLogin}>
                        <Text style={styles.login}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn_login} onPress={navigationToCadastro}>
                        <Text style={styles.login}>CADASTRO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
