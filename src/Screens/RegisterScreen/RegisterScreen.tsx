import React, { useState } from 'react'
import { View, Text, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './RegisterScreenStyles'

export default function RegisterScreen () {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const navigation = useNavigation ()

    const OnPressedEntrar = (navigation: any) => {
        navigation.navigate('Screens')
    }

    return (
        <View style={styles.screenView}>

            <StatusBar 
                translucent
                backgroundColor={'transparent'}
                barStyle="dark-content"
            />

            {/* Logo do ecomCars */}
            <View style={{ marginTop: '40%' }}>
                <Image
                    source={require('../../../assets/ecomCars.png')}
                    alt="ecomCars"
                    resizeMode="contain"
                />
            </View>

            {/* Texto Entrar */}
            <View style={{ marginTop: '15%' }}>
                <Text style={styles.headerText}>Registrar</Text>
            </View>

            {/* Input do Nome */}
            <View style={{ marginTop: '10%'}}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome"
                    value={name}
                    onChangeText={text => setName(text)}
                />
            </View>

            {/* Input do Email */}
            <View style={{ marginTop: '5%'}}>
                <TextInput 
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            {/* Input da Senha */}
            <View style={{ marginTop: '5%'}}>
                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>

            {/* Botão de entrar */}
            <TouchableOpacity onPress={() => OnPressedEntrar(navigation)}>
                <View style={{ marginTop: '10%' }}>
                    <View style={styles.button}>

                        <View style={styles.buttonTextView}>
                            <Text style={styles.buttonText}>Entrar no ecomCars+</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}
