import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/login';
import { Input } from '../components/Input';

export default function Login({ navigation }) {
    function navigationToLogin() {
        navigation.navigate('Login')
    }
    return (
        <View>
            <View style={styles.form}>
                <Text style={styles.texto}>E-mail:</Text>
                <Input />
                <Text style={styles.texto}>Senha:</Text>
                <Input />
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} >
                    <Text style={styles.textBtn}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};