import { createSlice,nanoid } from "@reduxjs/toolkit";

const intialState = {
    todos:[{id:1,text:"hello from initialstate"}]
}

export const todoSlice = createSlice({
    name:'todo',
    intialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
            
        },
        removeTodo:(state,action)=>{
            state.todos.filter((todo)=>{
                return todo.id !== action.payload
            })
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions


export default todoSlice.reducer