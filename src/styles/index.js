import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    viewLogo: {
        backgroundColor: '#FBFE7F',
        height: 199,
        width: '100%',
        alignItems: "center",
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        color: 'black'
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
        backgroundColor: '#FBFE7F',
        margin: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_login: {
        width: 150,
        height: 50,
        padding: 0,
        borderRadius: 5,
        backgroundColor: '#FBFE7F',
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
});