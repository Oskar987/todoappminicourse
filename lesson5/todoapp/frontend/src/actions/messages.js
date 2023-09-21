import { CREATE_MESSAGE } from '../actions/types';

// CREATE MESSAGE
export const createMessage = (msg) => {
    return {
        type: CREATE_MESSAGE,
        payload: msg,
    };
};