import { CHANGE_CURRENT_USER } from './actions';
import { combineReducers } from 'redux';

const authInitialState = Object.freeze({
    currentUser: ''
});

function authReducer(state = authInitialState, action) {
    switch (action.type) {
        case CHANGE_CURRENT_USER:
            return { ...state, currentUser: action.payload };
        default:
            return { ...state };
    }
}

export default combineReducers({ auth: authReducer });
