import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function ItemUser(props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.form}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <MaterialIcons name='person' size={30} color="#bde4dd" />
                    <Text style={styles.textUser}> - {props.data.first_name} {props.data.last_name}</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <MaterialIcons name='email' size={30} color="#bde4dd" />
                    <Text style={styles.textUser}> - {props.data.email}</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <MaterialIcons name='subtitles' size={30} color="#bde4dd" />
                    <Text style={styles.textUser}> - {props.data.crp}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        height: "50%",
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    textUser: {
        fontSize: 20,
    },
    form:{
        top:50
    }
});