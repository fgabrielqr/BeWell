import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    btn_login: {
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
    form: {
        top: 100,
        height: 170,
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    texto: {
        top: 10,
        marginLeft: 25
    },
    textBtn: {
        fontWeight: 'bold'
    },
    inputError:{
        borderColor: 'red',
    },
    error:{
        fontSize: 15,
        color: 'red',
    },
});