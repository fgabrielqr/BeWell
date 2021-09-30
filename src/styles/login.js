import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 10,
    },
    inputs: {
        height: 55,
        width: '100%',
        borderRadius: 5,
        fontSize: 17,
        marginTop: 15,
        backgroundColor: '#FFFFFF',
        paddingLeft: 15,

    },
    btn_login: {
        height: 50,
        width: '90%',
        backgroundColor: '#bde4dd',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    btn: {
        flex: 1,
        top: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        top: '25%',
        height: 170,
        justifyContent: 'center',
        alignContent: 'center'
    },
    texto: {
        top: 5,
        marginLeft: 15,
    },
    textBtn: {
        fontWeight: 'bold'
    },
    inputError: {
        borderColor: 'red',
    },
    error: {
        left: 10,
        fontSize: 14,
        color: 'red',
    },
});