import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../pages/Home';
import HomeRoutes from '../routes/home.routes';

const AppStack = createStackNavigator();

// rotas para os usuários logados
export function AppRoutes(){
    return(
        <AppStack.Navigator screenOptions={{ headerShown: false}}>
            <AppStack.Screen name="Home" component={HomeRoutes}/>
        </AppStack.Navigator>
    )
}