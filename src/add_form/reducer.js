import {
    FETCH_TOKEN_SUCCESS
} from './action_types';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_TOKEN_SUCCESS: {
            return [...state, action.data];
        }
        default: {
            return state;
        }
    }
}