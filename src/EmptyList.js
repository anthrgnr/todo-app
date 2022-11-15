import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const EmptyList = () => (
    <View style={styles.emptyList}>
        <Text style={styles.text}>
            Looks like, there's nothing to do yet...
        </Text>
    </View>
)

const styles = StyleSheet.create({
    emptyList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 15
    },
    text: {
        fontSize: 20,
        fontWeight: '300',
        color: '#444'
    }
})