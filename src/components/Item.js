import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';


export function Item(props){
    
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{props.first_name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:15, 
        width:320,
        height:50, 
        backgroundColor:"#DEE4E4",
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-between', 
        borderRadius:5,
    },
    texto:{
        fontSize:18, 
    }
})