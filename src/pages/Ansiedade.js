import React, { useState } from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Ansiedade() {
    const[isLoading,setIsLoading] = useState(false);


    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    } 

    return (
        <View  style={styles.container}>
            <StatusBar
            animated={true}
            backgroundColor="#bde4dd"/>
        

        <ScrollView >
                <Text style={styles.titulo}>
                    Ansiedade
                </Text>
                <Text style={styles.texto}>
                    • A ansiedade é uma EMOÇÃO NORMAL – ela nos ajuda a lidar com as situações difíceis, desafiadoras ou perigosas.
                </Text>
                <Text style={styles.texto}>
                    • A ansiedade é COMUM – há vezes em que todos nós nos sentimos preocupados, ansiosos, nervosos ou estressados.
                </Text>
                <Text style={styles.texto}>
                    • Mas a ansiedade se torna um PROBLEMA QUANDO ELA IMPEDE QUE O SEU
                    filho desfrute da vida normal, afetando sua escola, trabalho, relações familiares, amizades
                    ou vida social.
                </Text>
                <Text style={styles.texto}>
                    • É aí que a ANSIEDADE ASSUME O CONTROLE e o seu filho perde o controle.
                </Text>
                
                <Text style={styles.titulo}>
                    Sentimentos ansiosos
                </Text>
                <Text style={styles.texto}>
                    • Quando ficamos ansiosos, nosso corpo se prepara para alguma forma de ação física,
                    frequentemente chamada de reação de “LUTA ou FUGA”. Quando o corpo se prepara,
                    podemos observar uma série de alterações físicas como:
                </Text>
                <Text style={styles.texto}>
                    • respiração curta;
                </Text>
                <Text style={styles.texto}>
                    • aperto no peito;
                </Text>
                <Text style={styles.texto}>
                    • vertigem ou tontura;
                </Text>
                <Text style={styles.texto}>
                    • palpitações;
                </Text>
                <Text style={styles.texto}>
                    • dor muscular, especialmente dor de cabeça ou no pescoço;
                </Text>
                <Text style={styles.texto}>
                    • vontade de ir ao banheiro;
                </Text>
                <Text style={styles.texto}>
                    • tremor;
                </Text>
                <Text style={styles.texto}>
                    • sudorese;
                </Text>
                <Text style={styles.texto}>
                    • boca seca;
                </Text>
                <Text style={styles.texto}>
                    • dificuldade para engolir;
                </Text>
                <Text style={styles.texto}>
                    • visão borrada;
                </Text>
                <Text style={styles.texto}>
                    • “frio na barriga” ou enjoo.
                </Text>

                <Text style={styles.texto}>
                    Geralmente, existem razões para alguém sentir ansiedade, tais como:
                </Text>

                <Text style={styles.texto}>
                    • enfrentar um exame difícil;
                </Text>
                <Text style={styles.texto}>
                    • dizer alguma coisa que pode não ser simpática a alguém;
                </Text>
                <Text style={styles.texto}>
                    • ter que ir a algum lugar novo ou fazer alguma coisa a qual tememos.
                </Text>
                <Text style={styles.texto}>
                    Depois que passa o evento desagradável, nosso corpo retorna ao normal e geralmente
                    acabamos nos sentindo melhor.                
                </Text>
                <Text style={styles.titulo}>
                    PENSAMENTOS de preocupação
                </Text>
                <Text style={styles.texto}>
                    Às vezes, pode não haver uma razão óbvia para nos sentirmos ansiosos. Outra causa de
                    ansiedade é a FORMA COMO PENSAMOS sobre as coisas. Podemos pensar que:               
                </Text>
                <Text style={styles.texto}>
                    • as coisas vão dar errado;
                </Text>
                <Text style={styles.texto}>
                    • não vamos ter sucesso;
                </Text>
                <Text style={styles.texto}>
                    • não vamos conseguir lidar com as dificuldades
                </Text>
                <Text style={styles.texto}>
                    A vida pode parecer uma grande preocupação quando a cabeça fica cheia de pensamentos
                    negativos e de preocupações. Parece que não conseguimos interrompê-los, achamos difícil nos
                    concentrarmos e pensarmos com clareza e os pensamentos negativos e preocupantes parecem
                    tornar as sensações físicas ainda piores.
                </Text>
                <Text style={styles.titulo}>
                    Parar de FAZER as coisas
                </Text>
                <Text style={styles.texto}>
                    A ansiedade é desagradável, e então encontramos formas de fazer com que nos sintamos melhor.
                    As situações temidas ou difíceis PODEM SER EVITADAS. Podemos parar de fazer as coisas
                    que nos preocupam. Quanto mais interrompemos ou evitamos as coisas, menos as fazemos e fica
                    mais difícil enfrentar nossos medos e superar nossas preocupações.
                </Text>

                <Text style={styles.titulo}>
                    Referências
                </Text>
                <Text style={styles.texto}>
                    A ansiedade é desagradável, e então encontramos formas de fazer com que nos sintamos melhor.
                    As situações temidas ou difíceis PODEM SER EVITADAS. Podemos parar de fazer as coisas
                    que nos preocupam. Quanto mais interrompemos ou evitamos as coisas, menos as fazemos e fica
                    mais difícil enfrentar nossos medos e superar nossas preocupações.
                </Text>
            </ScrollView>

            <View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo:{
        fontSize: 20,
        marginRight:10,
        marginLeft:10,
        fontWeight: 'bold'
    },
    texto:{
        fontSize: 20,
        marginRight:15,
        marginLeft:15,
        textAlign: 'justify' 
    },
    welcome: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      fontFamily: 'Open Sans',
      fontWeight:'800',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      fontFamily: 'Open Sans',
    },
  });