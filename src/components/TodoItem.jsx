import React, { useState, useRef } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({ todo }) {

  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const [isTodoEditable, setIsTodoEditable] = useState(false)
  //this is a state to check that our todo is editable or not

  const [todoMsg, setTodoMsg] = useState(todo.title)


  const editTodo = () => {
    updateTodo(todo.id, { title: todoMsg })
    setIsTodoEditable(false)  
  }

  const toggle = () => {
    toggleComplete(todo.id)
  }

  const inputRef = useRef()

  return (
    <div className='md:w-3/4 w-[95vw] mx-auto mb-4'>
      <div className={`w-full mx-auto flex items-center rounded-xl 
        ${todo.completed ? "bg-[#ffe799]" : "bg-[#f0d1a8]"}`}>

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggle}
          className='ml-3 h-4 w-4'
        />

        <input
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
          ref={inputRef}
          className={`sm:w-[69vw] w-2/3 p-3 text-2xl outline-none 
          ${isTodoEditable ? "border-black" : "border-red-600"}
          ${todo.completed ? "line-through bg-[#ffe799]" : "bg-[#f0d1a8]"}`}
        />

        <div className='flex items-center gap-3 px-3'>
          <button
            onClick={() => {
              if (todo.completed) return;
              if (isTodoEditable) {
                editTodo()
              } else {
                setIsTodoEditable((prev) => !prev)
                inputRef.current.focus()
              }
            }}
            disabled={todo.completed}
            className='disabled:opacity-50'
          >
            {isTodoEditable ? <img className='w-6 h-6' src="save.png" alt="" /> : <img className='w-6 h-6' src="pencil.png" alt="" />}
          </button>

          <button onClick={() => deleteTodo(todo.id)}>
            <img className='w-8 h-8' src="cross.png" alt="" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default TodoItem