import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { AddTodo } from './src/AddTodo'
import { EmptyList } from './src/EmptyList'
import { Navbar } from './src/Navbar'
import { Todo } from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = title => {
    setTodos(prevTodos => ([
      ...prevTodos,
      {
        id: Date.now().toString(),
        title: title,
        checked: false
      }
    ]))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const checkTodo = id => {
    const index = todos.findIndex(todo => todo.id === id)
    setTodos(prevTodos => {
      prevTodos[index].checked = !prevTodos[index].checked
      return (
        [...prevTodos]
      )
    })
  }

  return (
    <View style={styles.wrapper}>
      <Navbar title={'Todo app'} />
      <View style={styles.content}>
        <AddTodo onAdd={addTodo} />
        {
          todos.length
            ? todos.sort(todo => todo.checked)
              .map(todo => (
                <Todo
                  todo={todo}
                  key={todo.id}
                  onDelete={deleteTodo}
                  onCheck={checkTodo}
                />
              ))
            : <EmptyList />
        }
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
    flex: 1,
    margin: 20
  }
})
