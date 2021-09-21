import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    centeredView: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        justifyContent: "space-evenly",
        alignItems: "center",
        shadowColor: "#000",
        width: '50%',
        height: '20%',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    btns_modal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        borderRadius: 5,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: '#23cf5c',
        margin: 20,
        padding: 10
    },
    buttonClose: {
        backgroundColor: '#d12c38',
        margin: 20,
        padding: 10
    }
});