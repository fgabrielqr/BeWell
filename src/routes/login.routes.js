import React from 'react';
import Login  from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Cadastro from '../pages/Cadastro';
import Ansiedade from '../pages/Ansiedade';
import Podcast from '../pages/Podcast';
import Videos from '../pages/Videos';
import Autocuidado from '../pages/Autocuidado';
import {createStackNavigator} from '@react-navigation/stack'


const LoginStack = createStackNavigator();



export function LoginRoutes(){
    return(
        <LoginStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#bde4dd' } }}>
            <LoginStack.Screen name='Login' component={Login} />
            <LoginStack.Screen name='Cadastro' component={Cadastro} />
            <LoginStack.Screen name='Ansiedade' component={Ansiedade} options={{ title: 'O que é ansiedade?' }} />
            <LoginStack.Screen name='Podcast' component={Podcast} options={{ title: 'Podcast' }} />
            <LoginStack.Screen name='Videos' component={Videos} options={{ title: 'Vídeos' }} />
            <LoginStack.Screen name='Autocuidado' component={Autocuidado} options={{ title: 'Autocudados' }} />
        </LoginStack.Navigator>
    )
}