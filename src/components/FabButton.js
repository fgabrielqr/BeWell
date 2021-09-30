import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../styles/home';

export function FabButton(props) {

    return (
        <View style={styles.btns}>
            <TouchableOpacity onPress={props.create} style={styles.btn_login}>
                <AntDesign name="plus" size={28} />
            </TouchableOpacity>

        </View>
    );
}