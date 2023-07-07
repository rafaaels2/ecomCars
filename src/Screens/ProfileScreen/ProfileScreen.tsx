import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import styles from './ProfileScreenStyles'

export default function ProfileScreen () {
    return (
        <View style={styles.screenView}>

            <StatusBar 
                translucent
                backgroundColor={'transparent'}
                barStyle="dark-content"
            />

            {/* Texto Entrar */}
            <View style={{ marginTop: '15%' }}>
                <Text style={styles.headerText}>Profile</Text>
            </View>

        </View>
    )
}
