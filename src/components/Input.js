import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/login';

export function Input(props) {
    return (
        <View style={styles.containerInput}>
            <TextInput
                style={styles.inputs}
                placeholder={props.label} secureTextEntry={props.senha} onChangeText={props.onChangeText}
            />
        </View>
    )
}

