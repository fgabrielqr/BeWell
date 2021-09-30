import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/login';

export function InputForm({ control, name, error, ...rest }) {
    return (
        <View style={styles.containerInput}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (

                    <TextInput style={[styles.inputs, error ? styles.inputError : ""]}
                        onBlur={onBlur} {...rest}
                        value={value}
                        onChangeText={onChange}
                    />
                )}
                name={name} />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}