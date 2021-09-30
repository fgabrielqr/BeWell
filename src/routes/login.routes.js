import React from 'react';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Cadastro from '../pages/Cadastro';
import Ansiedade from '../pages/Ansiedade';
import Videos from '../pages/Videos';
import Autocuidado from '../pages/Autocuidado';
import { createStackNavigator } from '@react-navigation/stack'
import Podcast from '../pages/Podcast';

const LoginStack = createStackNavigator();

export function LoginRoutes() {
    return (
        <LoginStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#bde4dd' } }}>
            <LoginStack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
            <LoginStack.Screen name='Login' component={Login} options={{ title: 'Faça seu Login' }} />
            <LoginStack.Screen name='Cadastro' component={Cadastro} />
            <LoginStack.Screen name='Ansiedade' component={Ansiedade} options={{ title: 'O que é ansiedade?' }} />
            <LoginStack.Screen name='Videos' component={Videos} options={{ title: 'Vídeos' }} />
            <LoginStack.Screen name='Podcast' component={Podcast} options={{ title: 'Podcast' }} />
            <LoginStack.Screen name='Autocuidado' component={Autocuidado} options={{ title: 'Autocuidados' }} />
        </LoginStack.Navigator>
    )
}