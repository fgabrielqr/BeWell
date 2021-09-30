import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/ansiedade_style';

export default function Autocuidado() {
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#bde4dd" />
            <ScrollView >
                <Text style={styles.titulo}>
                    Técnicas para tratar a ansiedade
                </Text>
                <Text style={styles.texto}>
                    {''} Vamos começar o tratamento entendendo as causas, o que está te deixando ansioso, é necessário que siga à risca todas as dicas abaixo para poder ter sucesso no tratamento. Vamos então identificar as Causas, A primeira medida é criar uma lista dos fatores que podem estar fazendo com que se sinta estressado, sendo o mais honesto possível com você mesmo. Então pegue uma folha qualquer e responda as seguintes questões:
                </Text>
                <Text style={styles.texto}>
                    • Com o que você mais se preocupa?
                </Text>
                <Text style={styles.texto}>
                    • Isso é algo constante na sua mente?
                </Text>
                <Text style={styles.texto}>
                    • Há algo que você teme que aconteça?
                </Text>
                <Text style={styles.texto}>
                    • Há algo específico que o faz se sentir triste ou deprimido?
                </Text>
                <Text style={styles.texto}>
                    • Em que período dia você sente mais medo?
                </Text>
                <Text style={styles.texto}>
                    • O que geralmente causa suas crises?
                </Text>
                <Text style={styles.texto}>
                    • Você pensa muita coisa negativa?
                </Text>
                <Text style={styles.texto}>
                    {''}    Mantenha um relatório das experiências e dos sentimentos que você tem com relação à sua ansiedade. Seus pensamentos estão contribuindo com a ansiedade nessas situações?
                </Text>
                <Text style={styles.texto}>
                    {''}  Procure alguém em quem você confie (um amigo, membro da família, vizinho entre outros) que poderá ouvi-lo. Muitas vezes, conversar com um amigo ou ente querido é tudo o que você precisa para liberar a ansiedade. Isso vai fazer parte do cronograma de treinamento que passarei no final do treinamento.
                </Text>
                <Text style={styles.texto}>
                    {''}    Mantenha um relatório das experiências e dos sentimentos que você tem com relação à sua ansiedade. Seus pensamentos estão contribuindo com a ansiedade nessas situações?
                </Text>
                <Text style={styles.titulo}>
                    1. controlar a sua respiração:
                </Text>
                <Text style={styles.texto}>
                    {''} Sintomas de ansiedade grave são muitas vezes ligados a maus hábitos respiratórios. Muitos homens e mulheres com ansiedade sofrem de maus hábitos respiratórios que contribuem para a ansiedade e muitos dos sintomas mais perturbadores.
                    Controlar sua respiração é a solução - e não é Difícil como você pensa.
                    Você realmente precisa retardar e reduzir a sua respiração, não acelerá-la ou tentar respirar mais fundo. Torne-a mais controlada, mais respirações lentas, rasas, usando a seguinte técnica:
                </Text>
                <Text style={styles.texto}>
                    • Respire lenta e suavemente pelo nariz por cerca de 5 a 7 segundos;
                </Text>
                <Text style={styles.texto}>
                    • Mantenha a posição por cerca de três ou quatro segundos;
                </Text>
                <Text style={styles.texto}>
                    • Expire lentamente e suavemente através dos lábios como se estivesse assobiando por cerca de 7-9 segundos.
                </Text>
                <Text style={styles.texto}>
                    {''}     Repita este exercício dez a vinte vezes. Este método de respiração irá garantir que você não está afobado (um problema comum das pessoas com ansiedade) e vai ajudar a recuperar o equilíbrio de CO2 em seu corpo, que cria muitos dos piores sintomas de ansiedade.
                </Text>
                <Text style={styles.titulo}>
                    2. falar com alguém amigável
                </Text>
                <Text style={styles.texto}>
                    {''}    Redução da ansiedade eficaz é muitas vezes sobre distração, uma vez que sua mente pode ser seu pior inimigo quando você tem sintomas de ansiedade severa. Uma técnica muito eficaz é a de falar com alguém que você gosta e confiança, especialmente no telefone. Não tenha vergonha de sua ansiedade - diga-lhes que você se sentir ansioso e explicar o que está sentindo.
                    Conversando com pessoas agradáveis mantém sua mente fora de seus sintomas, bem como a natureza de apoio de amigos e da família que lhe dá impulso adicional de confiança.
                </Text>
                <Text style={styles.titulo}>
                    3. Tente alguma atividade aeróbica
                </Text>
                <Text style={styles.texto}>
                    {''} Durante os períodos de ansiedade o corpo está cheio de adrenalina. Colocando essa adrenalina para a atividade aeróbica pode ser uma ótima maneira de melhorar a sua ansiedade. Isso porque o exercício tem inúmeras vantagens para controlar os sintomas de ansiedade:
                </Text>
                <Text style={styles.texto}>
                    • Exercício queima hormônios do estresse que criam sintomas de ansiedade;
                </Text>
                <Text style={styles.texto}>
                    • Exercitar seus músculos, reduz o excesso de energia e tensão;
                </Text>
                <Text style={styles.texto}>
                    • O exercício libera endorfinas que melhoram o humor geral;
                </Text>
                <Text style={styles.texto}>
                    • Forças exercício de respiração saudável;
                </Text>
                <Text style={styles.texto}>
                    • O exercício é uma distração saudável.
                </Text>
                <Text style={styles.titulo}>
                    4. Encontre o que te faz relaxar
                </Text>
                <Text style={styles.texto}>
                    {''}    Já existem coisas em sua vida que te faz relaxar. Não tente evitá-los, Em vez disso, faça as atividades o mais rápido possível. Por exemplo, se você achar que um banho quente é relaxante, não espere para tomar banho. Ir na banheira, acender algumas velas, adicione alguns aromas agradáveis, e pule dentro.
                </Text>
                <Text style={styles.titulo}>
                    5. Aprenda a enganar o seu Pensamento Ansioso
                </Text>
                <Text style={styles.texto}>
                    {''}    Ansiedade não vem do nada. Quando você tem ataques de ansiedade, muitas vezes é porque a sua mente tem uma tendência a espiral de pensamentos negativos - muitas vezes sem o seu controle. Às vezes, você pode controlar essa ansiedade, mantendo esses pensamentos seguros, e aprender a demitir gatilhos que causam sua ansiedade.
                </Text>
                <Text style={styles.titulo}>
                    6. Ouça uma boa música
                </Text>
                <Text style={styles.texto}>
                    {''}     Cada pequena coisa é mais importante. É por isso mesmo que parece que ele não vai fazer uma tremenda diferença, ouvir sua música favorita pode ter um efeito poderoso sobre a sua ansiedade. A chave é não apenas escolher músicas que você gosta, A chave é também se certificar de que você está ouvindo música que representa a maneira que você quer sentir. Música para ser feliz ou relaxar, não é qualquer música.
                </Text>
                <Text style={styles.titulo}>
                    7. Deixar tudo para fora
                </Text>
                <Text style={styles.texto}>
                    {''}   A ansiedade é interessante, porque ele tende a ficar pior quando você tentar lutar contra isso. Não está claro por que isso ocorre, mas muito provavelmente o estresse que seu corpo passa, a fim de controlar o stress da ansiedade só piora as coisas, assim como o esforço necessário para tentar não sentir seus sentimentos naturais.
                </Text>
                <Text style={styles.titulo}>
                    8. Muito Love
                </Text>
                <Text style={styles.texto}>
                    {''}    "Quando eu ter essa sensação, eu quero ... cura sexual."
                    Não é um mito. A relação sexual pode ser extremamente calmante. É uma atividade física perturbador que libera endorfinas e ajuda você a se sentir mais relaxado e menos tenso.
                </Text>
                <Text style={styles.titulo}>
                    9. vivendo hoje
                </Text>
                <Text style={styles.texto}>
                    {''}    Simplesmente aprender a viver para hoje pode diminuir sua ansiedade.
                    Aqueles com ansiedade muitas vezes começam a se concentrar demais em como eles se sentem e as suas preocupações sobre o futuro. A cada dia torna-se tentando viver com a ansiedade em vez de tentar viver em geral. Aprender a abraçar a ideia que você tem ansiedade e tentar viver uma vida grande e emocionante de qualquer maneira é importante.
                    E o que é interessante é que se você pode aprender para finalmente ter essa mentalidade - a deixar-se experimentar o medo e tentar viver a vida de qualquer maneira - você vai achar que a sua ansiedade tende a dissipar-se com ele. Não é uma cura, mas é perto.
                </Text>
                <Text style={styles.titulo}>
                    Fonte:
                </Text>
                <Text style={styles.texto}>
                    10 técnicas para controlar a ansiedade, de Joeverton Rodrigo - Pesquisador e Escritor.
                </Text>
                <Text style={styles.texto}>
                    Link: http://blog.joevertonrodrigocursos.com
                </Text>
            </ScrollView>
        </View>
    )
};