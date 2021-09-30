import { StyleSheet } from 'react-native';

export const UpdateStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 10,
    },
    form: {
        flex: 2,
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnU: {
        flex: 1,
        top: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        top: 10,
        marginLeft: 15,
    },
    textBtn: {
        fontWeight: 'bold',
    },
    btn_login: {
        top: 25,
        height: 50,
        width: '90%',
        backgroundColor: '#bde4dd',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    inputs: {
        height: 55,
        width: '100%',
        borderRadius: 5,
        fontSize: 17,
        marginTop: 15,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
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