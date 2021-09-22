import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/home';
import { useAuth } from '../contexts/Auth';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {

<<<<<<< HEAD
    const {user, logout, userLoading} = useAuth();
    const[isLoading,setIsLoading] = useState(false);

    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 
=======
    const { user, logout, userLoading } = useAuth();
>>>>>>> dd78cb4e66f008c2e7e86a880e1ff9b6bbf97b75

    function navigationToAnsiedade() {
        navigation.navigate('Ansiedade');
    }

    function navigationToVideo() {
        navigation.navigate('ListVideos');
    }

    function navigationToPodcast() {
        navigation.navigate('ListPodcast');
    }

    function navigationToAutocuidado() {
        navigation.navigate('Autocuidado');
    }
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#bde4dd" />
            <View style={styles.viewLogo}>
                <View></View>
                <View style={styles.viewLogo1}>
                    <Text style={styles.ti}>
                        Olá,
                    </Text>
                    <Text style={styles.ti}>
                        {user.first_name}
                    </Text>

                </View>
                <Image
                    source={require('../assets/imagens/img5.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.viewFuncionalidades}>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={navigationToAnsiedade}>
                        <Image
                            source={require('../assets/imagens/img4.png')}
                            style={styles.logo1}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>O que é ansiedade?</Text>
                    <TouchableOpacity style={styles.btn} onPress={navigationToPodcast}>
                        <Image
                            source={require('../assets/imagens/img3.png')}
                            style={styles.logo2}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>Podcast</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={navigationToVideo}>
                        <Image
                            source={require('../assets/imagens/img2.png')}
                            style={styles.logo3}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>Vídeos</Text>
                    <TouchableOpacity style={styles.btn} onPress={navigationToAutocuidado}>
                        <Image
                            source={require('../assets/imagens/img1.png')}
                            style={styles.logo4}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title1}>Autocuidado</Text>
                </View>
            </View>
        </View>
    );
}