import React, { useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Keyboard, TouchableOpacity  } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                 <Text style={styles.title}>BeWell</Text> 
            </View>

            <View style={styles.viewFuncionalidades}>
                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.title}>BeWell</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.title}>BeWell</Text>
                    </TouchableOpacity>
                </View>

                <View> 
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.title}>BeWell</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.title}>BeWell</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor:'red', 
        flexDirection:"row", 
        alignItems:'center', 
        justifyContent:'space-evenly'
	},
    viewButtons:{
        backgroundColor:'blue', 
        height:250,
    }, 

    btn:{
        width: 120,
        height: 120, 
        borderRadius:90,  
        backgroundColor:'blue',
        margin:50, 
        alignItems:'center',
        justifyContent:'center'
    }
    
})