import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import styles from './CarCardStyles'

type Props = {
    modelo: string;
    titulo: string;
    cor: string;
    imagem: string;
    onPress: () => void;
}

export default function CarCard (props : Props) {
    return (
        <View style={{ marginTop : "7%", marginBottom: "8%"}}>
            <TouchableOpacity onPress={props.onPress}>

                {/* Box do Carro */}
                <View style={{ backgroundColor: props.cor, borderRadius: 25, padding: 15, width: wp("85%"), height: hp("15%")}}>
                    <Text style={styles.modeloText}>{props.modelo}</Text>
                    <Text style={styles.tituloText}>{props.titulo}</Text>
                </View>

                {/* Hstack do carro + icon */}
                <View style={{ position: 'absolute', flexDirection: 'row' }}>

                    {/* Imagem do carro */}
                    <View style={{ marginTop:"30%", marginLeft: "10%" }}>
                        <Image
                            style={{ width: wp("40%"), height: hp("9%")}}
                            source={{ uri: props.imagem }}
                            alt={'Imagem do Carro'}
                        />
                    </View>

                    {/* Icon */}
                    <View style={styles.circle}>
                        <MaterialCommunityIcons
                            name="arrow-right"
                            size={30}
                            color={'#A07A28'}
                        />
                    </View>

                </View>
                
            </TouchableOpacity>           
        </View>
    )
}