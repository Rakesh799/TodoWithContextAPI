import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'


function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()


    const add = (e) => {
        e.preventDefault()
        if (!todo) return;

        addTodo({ id: Date.now(), title: todo, completed: false })
        setTodo("")
    }

    return (
        <div className='w-3/4 mx-auto mt-6'>
            <form onSubmit={add} action='submit' className='p-4'>
                <h1 className='font-bold text-3xl text-center my-4'>All-in-One Todo Manager</h1>
                <div className="flex justify-center items-center">
                    <input
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        className='w-[50vw] bg-[#f0d1a8] py-3 px-2 text-2xl rounded-l-xl outline-none'
                    />
                    <button type='submit' className='bg-[#f8b68d] hover:bg-[#ff9273] p-3 text-2xl font-bold rounded-r-xl'>
                        Add
                    </button>
                </div>
                <hr className='mt-3 mb-10' />
            </form>
        </div>
    )
}

export default TodoForm
