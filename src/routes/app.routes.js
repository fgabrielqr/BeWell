import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import CadastroPodcast from '../pages/CadastroPodcast';
import ListPodcast from '../pages/ListPodcast';
import HomeRoutes from '../routes/home.routes';

const AppStack = createStackNavigator();

// rotas para os usuários logados
export function AppRoutes(){
    return(
        <AppStack.Navigator >
            <AppStack.Screen name="Home" component={HomeRoutes} options={{ headerShown: false  }}/>
            <AppStack.Screen name="CadastroPodcast"  component={CadastroPodcast} options={{ title: 'Cadastro de Podcast' }}/>
            <AppStack.Screen name="ListPodcast"  component={ListPodcast} options={{ title: 'Meus Podcasts' }}/>

        </AppStack.Navigator>
    )
}