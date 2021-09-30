import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/iten_user_style';

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