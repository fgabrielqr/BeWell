import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
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
import { useAuth } from '../contexts/Auth';
import { styles } from '../styles/home';

const AppStack = createStackNavigator();

// rotas para os usuários logados
export function AppRoutes(){
    const {logout} = useAuth();

    return(
        <AppStack.Navigator >
            <AppStack.Screen name="Home" component={HomeRoutes} options={{ headerShown: false}}/>
            <AppStack.Screen name="MenuPodcast"  component={MenuPodcast} options={{ title: 'Menu Podcast',  
                headerRight: () => (
                    <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                ) 
            }}/>
            <AppStack.Screen name="MenuVideos"  component={MenuVideos} options={{ title: 'Menu Videos',
                headerRight: () => (
                    <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                )  
            }}/>

            <AppStack.Screen name="CadastroPodcast"  component={CadastroPodcast} options={{ title: 'Cadastro de Podcast', 
                headerRight: () => (
                    <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                ) 
            }}/>
            <AppStack.Screen name="ListPodcast"  component={ListPodcast} options={{ title: 'Meus Podcasts',

                headerRight: () => (
                    <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                ) 
            }}/>

            <AppStack.Screen name="ListVideos"  component={ListVideos} options={{ title: 'Meus Videos',

                headerRight: () => (
                    <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                ) 

            }}/>

            <AppStack.Screen name="UpdatePodcast"  component={UpdatePodcast} options={{ title: 'Atualizar de Podcast',
                
                headerRight: () => (
                    <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                ) 
            
            }}/>
            <AppStack.Screen name="UpdateVideos"  component={UpdateVideos} options={{ title: 'Atualizar de Video', 
        
                    headerRight: () => (
                        <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                            <Text>
                                Sair
                            </Text>
                        </TouchableOpacity>
                    ) 
            
            }}/>

            <AppStack.Screen name="Ansiedade"  component={Ansiedade} options={{ title: 'Sobre Ansiedade', 
                headerRight: () => (
                    <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                )            
            }}/>
            <AppStack.Screen name="Videos"  component={Videos} options={{ title: 'Meus Videos',
                headerRight: () => (
                    <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                ) 
            }}/>
            <AppStack.Screen name="Autocuidado"  component={Autocuidado} options={{ title: 'Meus Autocuidado',
                headerRight: () => (
                    <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                ) 
            }}/>
            <AppStack.Screen name="UpdateUser"  component={UpdateUser} options={{ title: 'Atualizar de Perfil',
                headerRight: () => (
                    <TouchableOpacity onPress={logout} style={styles.btn_logout}>
                        <Text>
                            Sair
                        </Text>
                    </TouchableOpacity>
                ) 
            }}/>

        </AppStack.Navigator>
    )
}