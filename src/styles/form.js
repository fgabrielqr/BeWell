import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll:{
        flex: 1,
    },
    texto: {
        top: 10,
        marginLeft: 25,
    },
    textBtn: {
        fontWeight: 'bold',
    },
    btn:{
        top: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_login: {
        height: '28%',
        width: '90%',
        backgroundColor: '#bde4dd',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    btn_entrar: {
        left: 17,
        top: 175,
        width: '90%',
        height: 50,
        padding: 0,
        borderRadius: 5,
        backgroundColor: '#bde4dd',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerInput: {
        width: "100%",
        paddingRight:15,
        paddingLeft:10
    },
    inputs: {
        height: 55,
        width: '100%',
        borderRadius: 5,
        fontSize: 17,
        marginTop:15,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,

    },
});