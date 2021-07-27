import React, { useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Keyboard  } from 'react-native';

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                 <Text style={styles.title}>BeWell</Text> 
            </View>

            <View style={styles.viewFuncionalidades}>
                 <Text style={styles.title}>Logo</Text> 
            </View>

            <View style={styles.viewButtons}>
                 <Text style={styles.title}>Logo</Text> 
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    }, 
    viewLogo:{
        backgroundColor: '#FBFE7F',
        height:199, 
        width:'100%', 
        alignItems:"center",
        justifyContent:'center'
    }, 
    title:{
        fontSize:20,
        color:'black'
    },
    viewFuncionalidades:{ 
        height: 480, 
        backgroundColor:'red'
    }, 
    viewButtons:{
        backgroundColor:'blue', 
        height:250
    }
    
})