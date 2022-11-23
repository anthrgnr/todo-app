import React from 'react'
import { CheckBox, View, Text, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

export const Todo = ({ todo, onDelete, onCheck }) => {
    const actionHandler = actionName => () => {
        if (actionName === 'check') onCheck(todo.id)
        else if (actionName === 'delete') onDelete(todo.id)
        else return
    }

    return (
        <View style={todo.checked
            ? { ...styles.todo, ...styles.todoChecked }
            : styles.todo}>
            <View style={styles.checkboxWrapper}>
                <CheckBox
                    style={styles.checkbox}
                    onValueChange={actionHandler('check')}
                    value={todo.checked}
                />
                <Text style={todo.checked
                    ? { ...styles.title, ...styles.titleChecked }
                    : styles.title}
                >
                    {todo.title}
                </Text>
            </View>
            <IconButton
                icon='trash-can-outline'
                size={20}
                color='#444'
                onPress={actionHandler('delete')}
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
    todoChecked: {
        opacity: 0.66
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
    },
    titleChecked: {
        textDecorationLine: 'line-through'
    }
})