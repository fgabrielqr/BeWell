import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


export default function Login({ navigation }) {
    function navigationToLogin() {
        navigation.navigate('Login')
    }
    return (
        <View>
            <Text>
                Login
            </Text>
            <TouchableOpacity onPress={navigationToLogin} />
        </View>
    )
};