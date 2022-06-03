import React from 'react'
import FormInput from './FormInput'
import Lists from './Lists'

const TodoApp = () => {
  return (
    <div>
        <h1>To Do List</h1>
        <FormInput />
        <Lists />
    </div>
  )
}

export default TodoApp