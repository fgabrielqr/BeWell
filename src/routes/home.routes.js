import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../pages/Home';
import Conta from '../pages/Conta';
import Dicas from '../pages/Dicas';

const Tab = createBottomTabNavigator();

export default function HomeRoutes() {
    return (
        <Tab.Navigator inactiveColor={'black'} activeColor={'#bde4dd'} >
            <Tab.Screen name="Homes" component={Home} options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Dicas" component={Dicas} options={{
                headerStyle: { backgroundColor: '#bde4dd' },
                tabBarLabel: 'Dicas',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Conta" component={Conta}
                options={{
                    headerStyle: { backgroundColor: '#bde4dd' },
                    tabBarIcon: 'Conta',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} backgroundColor={'#bde4dd'} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}