import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    modeloText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_300Light',
        fontSize: 25,
    },

    tituloText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_300Light',
        fontSize: 17,
    },

    circle: {
        marginTop:"35%",
        marginLeft:"20%",
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        width: wp("10%"),
        height: wp("10%"),
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles