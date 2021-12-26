const initialState = {
    todos: []
}

const GET_TODOS = 'GET_TODOS'
const MARK_COMPLETE = 'MARK_COMPLETE'
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'


const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case MARK_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    action.payload,
                    ...state.todos,
                ]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state
    }
}

export { GET_TODOS, MARK_COMPLETE, ADD_TODO, DELETE_TODO }
export default todoReducer 