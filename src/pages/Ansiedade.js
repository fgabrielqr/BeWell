import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Ansiedade() {
    return (
        <View>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
            <Text>
                O que é ansiedade?
            </Text>
        </View>
    )
};