import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Ansiedade() {
    const[isLoading,setIsLoading] = useState(false);


    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 

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