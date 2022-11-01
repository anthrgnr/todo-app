import React, { createRef, useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export const AddTodo = ({ onAdd }) => {
    const inputRef = createRef()
    const [value, setValue] = useState('')

    const pressHandler = () => {
        inputRef.current.blur()
        if (value.trim()) {
            onAdd(value)
            setValue('')
        }
    }

    return (
        <View style={styles.wrapper}>
            <TextInput
                ref={inputRef}
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Your todo text'
                placeholderTextColor='#ccc'
            />
            <Button
                style={styles.button}
                onPress={pressHandler}
                title='Add todo'
                color='#274ef1'
                disabled={!value.trim()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    input: {
        flex: 1,
        height: 32,
        marginRight: 12,
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderColor: '#ccc',
        color: '#444',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 16
    }
})