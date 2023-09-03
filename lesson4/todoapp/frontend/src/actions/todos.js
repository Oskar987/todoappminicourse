import axios from 'axios';
import { GET_TODO_LIST, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/types';

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
        }).catch(error => console.log(error));
};

//Delete todo
export const deleteTodo = (id) => dispatch => {
    axios.delete(`api/todo/${id}/`)
        .then(result => {
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
            dispatch({
                type: ADD_TODO,
                payload: result.data
            });
        }).catch(error => console.log(error));
};