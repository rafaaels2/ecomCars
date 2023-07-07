import React from 'react'
import { View, Image, StatusBar, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import styles from './SelectCarScreenStyles'

export default function SelectCarScreen () {
    const route = useRoute<any>()
    
    return (
        <View style={{ flex: 1, backgroundColor: "#E5E5E5"}}>

            <StatusBar 
                translucent
                backgroundColor={'transparent'}
                barStyle="dark-content"
            />
            
            {/* Box superior */}
            <View style={styles.carBox}>

                {/* Logo do EcomCars */}
                <View style={{ marginTop: '10%', marginBottom: '8%', alignItems: 'center'}}>
                    <Image
                        source={require('../../../assets/ecomCars.png')}
                        alt={'ecomCars'}
                        resizeMode='contain'
                    />
                </View>

                {/* Hstack */}
                <View style={{ flexDirection: 'row'}}>

                    {/* Icon da flecha esquerda */}
                    <View style={{ marginTop: '10%'}}>
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            color="#A07A28"
                            size={30}
                        />
                    </View>

                    {/* Lista de imagens do carro */}
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        data={route.params.car.imagens}
                        keyExtractor={index => String(index)}
                        renderItem={({ index }) => (
                            <View style={{marginTop: '5%', marginHorizontal: wp("20%")}} >
                                <Image
                                    style={{ width: wp("50%"), height: hp("11%")}}
                                    source = {{ uri: route.params.car.imagens[index] }}
                                    alt={'Imagem do Carro'}
                                />
                            </View>
                        )}
                    />  

                    {/* Icon da flecha direita */}
                    <View style={{ marginTop: '10%'}}>
                        <MaterialCommunityIcons
                            name={'chevron-right'}
                            color="#A07A28"
                            size={30}
                        />
                    </View>
                    
                </View>
                
                {/* Nome do Carro */}
                <View style={{ marginLeft: '5%', marginTop: '8%', marginBottom: '2%'}}>
                    <Text style={styles.carName}>{route.params.car.modelo}</Text>
                </View>

            </View>
            
            <ScrollView>

                {/* Texto especificações */}
                <View style={{ marginTop: '4%', marginLeft: '5%' }}>
                    <Text style={styles.carName}> Especificações </Text>
                </View>
                
                {/* Hstack */}
                <View style={{ flexDirection: 'row'}}>
                    
                    {/* Box do Specs Card */}
                    <View style={{ marginTop: '5%', marginLeft: '6%'}}>
                        <View style={styles.specsCard}>
                            <MaterialCommunityIcons
                                name={'car'}
                                color={'#A07A2B'}
                                size={50}
                            />
                            <Text style={{ marginTop:'10%', fontSize: 15}}> {route.params.car.especificacoes.categoria} </Text>
                        </View>
                    </View>
                    
                    {/* Box do Specs Card */}
                    <View style={{ marginTop: '5%', marginLeft: '8%'}}>
                        <View style={styles.specsCard}>
                            <MaterialCommunityIcons
                                name={'engine'}
                                color={'#A07A2B'}
                                size={50}
                            />
                            <Text style={{ marginTop:'10%', fontSize: 15}}> {route.params.car.especificacoes.motor} </Text>
                        </View>
                    </View>

                </View>

                {/* Hstack */}
                <View style={{ flexDirection: 'row'}}>
                    
                    {/* Box do Specs Card */}
                    <View style={{ marginTop: '5%', marginLeft: '6%'}}>
                        <View style={styles.specsCard}>
                            <MaterialCommunityIcons
                                name={'car-shift-pattern'}
                                color={'#A07A2B'}
                                size={50}
                            />
                            <Text style={{ marginTop:'10%', fontSize: 15}}> {route.params.car.especificacoes.transmissao} </Text>
                        </View>
                    </View>
                    
                    {/* Box do Specs Card */}
                    <View style={{ marginTop: '5%', marginLeft: '8%'}}>
                        <View style={styles.specsCard}>
                            <MaterialCommunityIcons
                                name={'gas-station'}
                                color={'#A07A2B'}
                                size={50}
                            />
                            <Text style={{ marginTop:'10%', fontSize: 15}}> {route.params.car.especificacoes.combustivel} </Text>
                        </View>
                    </View>

                </View>
                
                {/* Texto de descrição */}
                <View style={{ marginTop: '4%', marginLeft: '5%'}}>
                    <Text style={styles.carName}> Descrição </Text>
                </View>
                
                {/* Descrição do carro */}
                <View style={{ marginTop: "5%", alignItems: 'center'}}>
                    <View style={styles.descricao}>
                        <Text style={styles.descricaoText}>{route.params.car.descricao}</Text>
                    </View>
                </View>

            </ScrollView>
            
            
            {/* View iniciar em baixo */}
            <View>

                {/* Footer */}
                <View style={styles.footer}>
                    
                    {/* Texto Diaria */}
                    <Text style={styles.diariaText}>R${route.params.car.diaria}/dia</Text>

                    {/* Botão Reservar */}
                    <TouchableOpacity>
                        <View style={styles.reservar}>
                            <Text style={styles.reservarText}>Reservar</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
                
        </View>
    )
}
