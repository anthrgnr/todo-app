import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { AddTodo } from './src/AddTodo'
import { Navbar } from './src/Navbar'
import { Todo } from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = title => {
    setTodos(prevTodos => ([
      ...prevTodos,
      {
        id: Date.now.toString(),
        title: title
      }
    ]))
  }

  return (
    <View style={styles.wrapper}>
      <Navbar title={'Todo app'} />
      <View style={styles.content}>
        <AddTodo onAdd={addTodo} />
        {todos.map(todo => (<Todo todo={todo} key={todo.id} />))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#e8eced'
  },
  content: {
    margin: 20  
  }
})
