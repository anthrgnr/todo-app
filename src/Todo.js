import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

export const Todo = ({ todo, onDelete }) => {
    const deleteHandler = () => {
        onDelete(todo.id)
    }

    return (
        <View style={styles.todo}>
            <Text style={styles.title}>{todo.title}</Text>
            <IconButton 
                icon='trash-can-outline'
                size={20}
                color='#444'
                onPress={deleteHandler}
            />
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
        paddingHorizontal: 14,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 16,
        fontWeight: '300',
        color: '#444'
    }
})