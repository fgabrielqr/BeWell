import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Dicas() {
    return (
        <View>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
            <Text>
                Dicas
            </Text>
        </View>
    )
};