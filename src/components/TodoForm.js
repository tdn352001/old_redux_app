import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions/todoActions'

const TodoForm = ({ addTodo }) => {

    const [title, setTitle] = useState('')



    const handleChangeInput = (e) => {
        setTitle(e.target.value)
    }

    const handleAddTodo = (e) => {
        e.preventDefault()
        addTodo(title)
        setTitle('')
    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input type="text" value={title} onChange={handleChangeInput} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}



export default connect(null, { addTodo })(TodoForm)
