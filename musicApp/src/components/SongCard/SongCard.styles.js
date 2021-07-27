import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 45,
    },
    inner_container: {
        padding: 10,
        flex: 1,
    },
    info_container: {
        flexDirection: 'row',
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 27
    },
    year: {
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold'
    },
    content_container: {
        flexDirection: 'row',
       
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 5

    },
    soldout_title: {
        color: 'red',
        fontSize: 12
    }
})