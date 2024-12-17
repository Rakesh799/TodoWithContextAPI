import {useContext, createContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            title: "go to market",
            completed: false
        },
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, title)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{},
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
  return useContext(TodoContext);
}
