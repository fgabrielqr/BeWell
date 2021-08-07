import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';

export default function Cadastro({ navigation }) {
    function navigationToLogin() {
        navigation.navigate('Login')
    }
    return (
        <View>
            <View style={styles.form}>
                <Text style={styles.texto}>Nome:</Text>
                <Input />
                <Text style={styles.texto}>CRP:</Text>
                <Input />
                <Text style={styles.texto}>E-mail:</Text>
                <Input />
                <Text style={styles.texto}>Senha:</Text>
                <Input />
                <Text style={styles.texto}>Confirmar Senha:</Text>
                <Input />
            </View>

            <View>
                <TouchableOpacity style={styles.btn_login} >
                    <Text style={styles.textBtn}>
                        CADASTRAR
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};