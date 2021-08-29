import React, { useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/cadastro';
import api from '../service/api';
import { useAuth } from '../contexts/Auth';


export default function ListPodcast() {

    return (
        <View>
            <View style={styles.form}>
                <Text style={styles.texto}>Ola</Text>
            </View>

            <View>
            
            </View>
        </View>
    )
};