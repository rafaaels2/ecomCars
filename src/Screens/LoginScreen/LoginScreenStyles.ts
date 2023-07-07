import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    screenView: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#E5E5E5',
    },

    headerText: {
        color: '#A07A28',
        fontFamily: 'Poppins_300Light',
        fontSize: 25,
    },

    input: {
        width: wp("80%"), 
        height: hp("5%"),
        borderWidth: 2, 
        borderRadius: 100, 
        borderColor: '#A07A28',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        fontSize: 20
    },

    button: {
        width: wp("80%"),
        height: hp("5%"),
        backgroundColor: '#A07A28',
        borderRadius: 100,
    },

    buttonTextView: {
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1,
    },

    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_300Light',
        fontSize: 20,
    },
})

export default styles
