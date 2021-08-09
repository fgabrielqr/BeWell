import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Ansiedade from './pages/Ansiedade';
import Podcast from './pages/Podcast';
import Videos from './pages/Videos';
import Autocuidado from './pages/Autocuidado';
import { createStackNavigator } from '@react-navigation/stack';

import HomeRoutes from './routes/home.routes';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#bde4dd' } }}>
            <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
            <Stack.Screen name='Home' component={HomeRoutes} options={{ headerShown: false }} />
            <Stack.Screen name='Ansiedade' component={Ansiedade} options={{ title: 'O que é ansiedade?' }} />
            <Stack.Screen name='Podcast' component={Podcast} options={{ title: 'Podcast' }} />
            <Stack.Screen name='Videos' component={Videos} options={{ title: 'Vídeos' }} />
            <Stack.Screen name='Autocuidado' component={Autocuidado} options={{ title: 'Autocudados' }} />
        </Stack.Navigator>
    );
}