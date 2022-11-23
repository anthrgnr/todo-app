import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = ({ title }) => (
    <View style={styles.navbar}>
        <Text style={styles.text}>{title}</Text>
    </View>
)

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 85,
        backgroundColor: '#84A3BC',
        paddingBottom: 15
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
})