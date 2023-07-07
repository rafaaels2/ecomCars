import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    carBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#A07A28',
        borderTopColor: '#FFFFFF'
    },

    carName: {
        color: '#000000',
        fontFamily: 'Poppins_300Light',
        fontSize: 20
    },

    footer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#A07A28',
        flexDirection: 'row',
    },

    specsCard: {
        alignItems: 'center',
        width: wp("40%"),
        paddingVertical: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    
    descricao: {
        width: wp("87%"),
        paddingVertical: 5,
        paddingHorizontal: 6,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        marginBottom: "5%"
    },

    descricaoText: {
        color: '#000000',
        fontFamily: 'Poppins_300Light',
        fontSize: 15
    },

    diariaText: {
        color: '#000000',
        fontFamily: 'Poppins_300Light',
        fontSize: 18
    },

    reservar: {
        marginLeft: "35%",
        backgroundColor: '#3391AE',
        borderRadius: 20,
        height: hp("4%"),
        alignItems: 'center',
        justifyContent: 'center'
    },

    reservarText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_300Light',
        fontSize: 20,
    },
})

export default styles

