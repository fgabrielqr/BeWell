import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        padding: 5,
    },
    video: {

        height: 241,
        width: '100%'
    },
    descricao: {
        padding: 5,
        fontSize: 15,
        color: '#000',
        alignSelf: 'flex-start',
    }
})