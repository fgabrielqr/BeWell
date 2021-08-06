import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


export default function Cadastro({ navigation }) {
    function navigationToLogin() {
        navigation.navigate('Login')
    }
    return (
        <View>
            <Text>
                Cadastro
            </Text>
            <TouchableOpacity onPress={navigationToLogin} />
        </View>
    )
};