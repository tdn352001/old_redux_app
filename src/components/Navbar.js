import React from 'react'
import { connect } from 'react-redux'

const Navbar = ({ todosLength }) => {
    return (
        <div className="navbar">
            <h1> My Redux Todos App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos: {todosLength}</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todosLength: state.todos.todos.length,
})

export default connect(mapStateToProps, {})(Navbar)
