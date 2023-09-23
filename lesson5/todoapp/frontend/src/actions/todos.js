import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_TODO_LIST, ADD_TODO, DELETE_TODO, TOGGLE_TODO, GET_ERRORS } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// Get todo list
export const getTodos = () => dispatch => {
    axios.get('api/todo/')
        .then(result => {
            dispatch({
                type: GET_TODO_LIST,
                payload: result.data
            });
        }).catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

//Delete todo
export const deleteTodo = (id) => dispatch => {
    axios.delete(`api/todo/${id}/`)
        .then(result => {
            dispatch(createMessage({todoDeleted: "Todo deleted!"}));
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
        }).catch(error => console.log(error));
};

//Toggle todo
export const toggleTodo = (todo) => dispatch => {
    todo.done = !todo.done;
    axios.put(`api/todo/${todo.id}/`, todo)
        .then(result => {
            dispatch({
                type: TOGGLE_TODO,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

//Add todo
export const addTodo = (todo) => dispatch => {
    axios.post('api/todo/', todo)
        .then(result => {
            dispatch(createMessage({todoAdded: "Todo added!"}));
            dispatch({
                type: ADD_TODO,
                payload: result.data
            });
        }).catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};
