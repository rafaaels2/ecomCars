import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import styles from './ComparativeScreenStyles'

export default function ComparativeScreen () {
    return (
        <View style={styles.screenView}>

            <StatusBar 
                translucent
                backgroundColor={'transparent'}
                barStyle="dark-content"
            />

            {/* Texto Entrar */}
            <View style={{ marginTop: '15%' }}>
                <Text style={styles.headerText}>Comparative</Text>
            </View>

        </View>
    )
}
