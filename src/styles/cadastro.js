import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerInput: {
        marginTop: 15,
        width: '91%',
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        alignContent: 'center',
        left: '10%',
    },
    inputs: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        color: 'gray',
        borderRadius: 5,
        fontSize: 17,
        justifyContent: 'center',
        alignContent: 'center'
    },
    btn_login: {
        left: 19,
        top: 475,
        width: '90%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#FBFE7F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        top: 50,
        height: 150,
        left: 3,

    },
    texto: {
        top: 10,
        marginLeft: 25
    },
    textBtn: {
        fontWeight: 'bold'
    }
});