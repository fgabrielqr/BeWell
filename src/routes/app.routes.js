import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import CadastroPodcast from '../pages/CadastroPodcast';
import ListPodcast from '../pages/ListPodcast';
import HomeRoutes from '../routes/home.routes';
import Videos from '../pages/Videos';
import Ansiedade from '../pages/Ansiedade';
import Autocuidado from '../pages/Autocuidado';
import MenuPodcast from '../pages/MenuPodcast';
import UpdatePodcast from '../pages/UpdatePodcast';
import UpdateUser from '../pages/UpdateUser';
import MenuVideos from '../pages/MenuVideos';
import ListVideos from '../pages/ListVideos';
import UpdateVideos from '../pages/UpdateVideos';

//MenuVideos
const AppStack = createStackNavigator();

// rotas para os usuários logados
export function AppRoutes(){
    return(
        <AppStack.Navigator >
            <AppStack.Screen name="Home" component={HomeRoutes} options={{ headerShown: false  }}/>
            <AppStack.Screen name="MenuPodcast"  component={MenuPodcast} options={{ title: 'Menu Podcast' }}/>
            <AppStack.Screen name="MenuVideos"  component={MenuVideos} options={{ title: 'Menu Videos' }}/>

            <AppStack.Screen name="CadastroPodcast"  component={CadastroPodcast} options={{ title: 'Cadastro de Podcast' }}/>
            <AppStack.Screen name="ListPodcast"  component={ListPodcast} options={{ title: 'Meus Podcasts' }}/>
            <AppStack.Screen name="ListVideos"  component={ListVideos} options={{ title: 'Meus Videos' }}/>

            <AppStack.Screen name="UpdatePodcast"  component={UpdatePodcast} options={{ title: 'Atualizar de Podcast' }}/>
            <AppStack.Screen name="UpdateVideos"  component={UpdateVideos} options={{ title: 'Atualizar de Video' }}/>

            <AppStack.Screen name="Ansiedade"  component={Ansiedade} options={{ title: 'Sobre Ansiedade' }}/>
            <AppStack.Screen name="Videos"  component={Videos} options={{ title: 'Meus Videos' }}/>
            <AppStack.Screen name="Autocuidado"  component={Autocuidado} options={{ title: 'Meus Autocuidado' }}/>
            <AppStack.Screen name="UpdateUser"  component={UpdateUser} options={{ title: 'Atualizar de Perfil' }}/>

        
        </AppStack.Navigator>
    )
}