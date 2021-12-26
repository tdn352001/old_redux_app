import { GET_TODOS, MARK_COMPLETE, ADD_TODO, DELETE_TODO } from '../reducers/todoReducer'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'



const getTodos = () => async dispatch => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        dispatch({
            type: GET_TODOS,
            payload: res.data,
        })
    } catch (error) {

    }
}

const markComplete = (id) => dispatch => {
    dispatch({
        type: MARK_COMPLETE,
        payload: id,
    })
}

const addTodo = (title) => async dispatch => {
    try {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        }

        await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        dispatch({
            type: ADD_TODO,
            payload: newTodo,
        })
    } catch (error) {

    }
}

const deleteTodo = (id) => dispatch => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_TODO,
                payload: id,
            })
        })

}


export { getTodos, markComplete, addTodo, deleteTodo }