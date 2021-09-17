import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
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
        flex: 2,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewButtons: {
        height: '50%',
        height: 100,
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
    btn_login: {
        width: 150,
        height: 50,
        padding: 0,
        borderRadius: 5,
        backgroundColor: '#bde4dd',
        margin: 30,
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
    }
});