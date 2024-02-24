import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const Todo = () => {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }


  return (
    <form onSubmit={addTodoHandler}>
      <input type='text'
        placeholder='Add a todo'
        value={input}
        onChange={(e) => setInput(e.target.value)} />
    </form>
  )
}

export default Todo
