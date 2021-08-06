import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
        </Stack.Navigator>
    );
}