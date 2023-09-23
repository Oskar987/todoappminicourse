import { combineReducers } from 'redux';
import todos from './todos';
import errors from './errors';
import messages from './messages';


export default combineReducers({
    todos,
    errors,
    messages
});