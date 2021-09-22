import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';


export function ItemUser(props){
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.textUser}>Nome - {props.data.first_name} {props.data.last_name}</Text>
            <Text style={styles.textUser}>E-mail - {props.data.email}</Text>
            <Text style={styles.textUser}>CRP - {props.data.crp}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     
    itemContainer:{
        height: "50%",
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        borderColor: '#B6B4B4',
        borderRadius: 10,
         margin: 10,
        flexWrap:'wrap'
  
      },
      textUser:{
          fontSize: 18,
      },

  });