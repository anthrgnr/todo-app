import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Todo = ({ todo }) => {
    return (
        <View style={styles.todo}>
            <Text style={styles.title}>{todo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 16,
        fontWeight: '300',
        color: '#444'
    }
})