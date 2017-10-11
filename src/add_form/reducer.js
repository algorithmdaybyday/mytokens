import {
    ADD_TOKEN
} from './action_types';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TOKEN: {
            return [...state, action.data];
        }
        default: {
            return state;
        }
    }
}