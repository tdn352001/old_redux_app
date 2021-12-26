import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import { markComplete, deleteTodo, getTodos } from '../store/actions/todoActions'


const Todos = ({ todos, markComplete, deleteTodo, getTodos }) => {
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div className="todo-list">
            <TodoForm />
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id} className={todo.completed ? ' completed' : ''}>
                            {todo.title}
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => markComplete(todo.id)} />
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})

const mapDispatchToProps = {
    markComplete,
    deleteTodo,
    getTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
