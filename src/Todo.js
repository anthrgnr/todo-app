import React from 'react'
import { CheckBox, View, Text, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

export const Todo = ({ todo, onDelete, onCheck }) => {
    const checkHandler = () => {
        onCheck(todo.id)
    }

    const deleteHandler = () => {
        onDelete(todo.id)
    }

    return (
        <View style={styles.todo}>
            <View style={styles.checkboxWrapper}>
                <CheckBox
                    style={styles.checkbox}
                    onValueChange={checkHandler}
                    value={todo.checked}
                />
                <Text style={styles.title}>{todo.title}</Text>
            </View>
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
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        marginRight: 12
    },
    title: {
        fontSize: 16,
        fontWeight: '300',
        color: '#444'
    }
})