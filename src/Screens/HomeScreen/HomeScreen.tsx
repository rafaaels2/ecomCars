import React from 'react'
import { View, Text, StatusBar, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useQuery } from 'react-query'
import { useNavigation } from '@react-navigation/native';

import CarCard from '../../Components/CarCard';
import styles from './HomeScreenStyles'
import getCars from '../../ApiCall/apiCars';
import { Car } from '../../Models/Car';

export default function HomeScreen () {
    const { data, isLoading } = useQuery(["cars"], () => getCars ())
    
    const navigation = useNavigation ()
    
    const OnPressedCar = (item: Car, navigation: any) => {
        navigation.navigate('SelectCar', { car: item })
    }

    if (isLoading) {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <View style={styles.screenView}>

            <StatusBar 
                translucent
                backgroundColor={'transparent'}
                barStyle="dark-content"
            />

            {/* Logo do ecomCars */}
            <View style={{ marginTop: '15%' }}>
                <Image
                    source={require('../../../assets/ecomCars.png')}
                    alt={'ecomCars'}
                    resizeMode='contain'
                />
            </View>

            {/* Texto de destaque */}
            <Text style={styles.headerText}>Destaques para você</Text>

            {/* FlatLista dos Car Cars */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item: Car) => item.id.toString()}
                renderItem={({ item }) => (
                <CarCard
                    modelo={item.modelo}
                    cor={item.colorhex}
                    titulo={item.titulo}
                    imagem={item.imagens[0]}
                    onPress={() => OnPressedCar(item, navigation)}
                />
                )}
            /> 

        </View>
    )
}