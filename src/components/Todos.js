import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector((state) => {
    return state.todos
  })

  const dispatch = useDispatch()
  return (
    <div>
      Todos
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => {
            dispatch(removeTodo(todo.id))
          }}>X</button>
        </li>
      ))}
    </div>
  )
}

export default Todos
