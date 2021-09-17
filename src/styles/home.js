import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bde4dd',
        justifyContent: 'center',
    },
    viewLogo: {
        flex: 1,
        backgroundColor: '#bde4dd',
        height: 200,
        width: '100%',
        alignItems: "center",
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        color: 'black',
    },
    title1: {
        bottom: 20,
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    viewFuncionalidades: {
        height: 480,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    viewButtons: {
        backgroundColor: '#fff',
        height: 150,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    btn: {
        width: 120,
        height: 120,
        borderRadius: 90,
        backgroundColor: '#bde4dd',
        margin: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btns:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    btn_login: {
        width: 70,
        height: 70,
        borderRadius: 50,
        margin: 5,
        backgroundColor: '#bde4dd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    logo: {
        width: 150,
        height: 250,
        marginTop: 0
    },
    logo1: {
        width: 70,
        height: 78,
    },
    logo2: {
        width: 60,
        height: 78,
    },
    logo3: {
        width: 50,
        height: 50,
    },
    logo4: {
        width: 60,
        height: 60,
    },
    form: {
        height: 300,
        justifyContent: 'space-evenly',
    },
    containerInput: {
        marginTop: 15,
        width: '90%',
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    inputs: {
        flex: 1,
        height: '100%',
        padding: 10,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        color: 'gray',
        borderRadius: 5,
        fontSize: 17,
    },
    Titulo: {
        top: 10,
        fontSize: 15,
        color: 'black',
    },
    ti: {
        top: 38,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    ti1: {
        top: 35,
        fontSize: 15,
        color: '#868081',
    },
    img: {
        top: 80,
        width: 60,
        height: 60,
        borderRadius: 10,
        height: 60,
        alignItems: 'center',
        backgroundColor: '#000000',
        right: 150
    },
    btn_logout:{
        margin:10,
    },
    textBtn:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});