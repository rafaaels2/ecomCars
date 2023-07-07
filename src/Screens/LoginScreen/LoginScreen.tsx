import React, { useState } from 'react'
import { Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './LoginScreenStyles'

export default function LoginScreen () {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigation = useNavigation ()

    const OnPressedEntrar = (navigation: any) => {
        navigation.navigate('Screens')
    }
    
    const OnPressedRegistrar = (navigation: any) => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.screenView}>

            <StatusBar 
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            
            {/* Logo do Ecomcars */}
            <View style={{ marginTop: '50%' }}>
                <Image
                    source={require('../../../assets/ecomCars.png')}
                    alt="ecomCars"
                    resizeMode="contain"
                />
            </View>
            
            {/* Texto Entrar */}
            <View style={{ marginTop: '15%' }}>
                <Text style={styles.headerText}>Entrar</Text>
            </View>
            
            {/* Input do e-mail */}
            <View style={{ marginTop: '10%' }}>
                <TextInput 
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            {/* Input da senha */}
            <View style={{ marginTop: '5%' }}>
                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            
            {/* Botão de entrar */}
            <TouchableOpacity onPress={() => OnPressedEntrar (navigation)}>
                <View style={{ marginTop: '5%'}}>
                    <View style={styles.button}>

                        <View style={styles.buttonTextView}>
                            <Text style={styles.buttonText}>Entrar no ecomCars+</Text>
                        </View>
                        
                    </View>
                </View>
            </TouchableOpacity>

            {/* Botão de Registrar */}
            <TouchableOpacity onPress={() => OnPressedRegistrar (navigation)}>
                <View style={{ marginTop: '10%'}}>
                    <View style={styles.button}>

                        <View style={styles.buttonTextView}>
                            <Text style={styles.buttonText}>Registrar-me</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}
