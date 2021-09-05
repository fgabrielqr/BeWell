import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { styles } from '../styles/cadastro';
import { Input } from '../components/Input';
import api from '../service/api';
import { StatusBar } from 'expo-status-bar';

export default function UpdateUser({route, navigation }) {
    const [user, setUser] = useState(route.params ? route.params : {})
    console.log(user)
    return (
        <View>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
            <View style={styles.form}>
                <Text style={styles.texto}>Nome</Text>
                <Input label='Nome' onChangeText = {first_name => setUser({...user, first_name})}   value={user.first_name}/>
                <Text style={styles.texto}>Sobrenome</Text>
                <Input label='Sobrenome' onChangeText = {last_name => setUser({...user, last_name})}   value={user.last_name}/>
                <Text style={styles.texto}>CRP</Text>
                <Input label='CRP' onChangeText = {crp => setUser({...user, crp})}   value={user.crp}/>
            </View>
        </View>
    )
};