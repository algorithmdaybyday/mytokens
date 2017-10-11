import {
    FETCH_TOKEN_SUCCESS
} from './action_types';
import {REMOVE_TOKEN} from "../list/action_types";

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_TOKEN_SUCCESS: {
            let used = false;

            const newState = state.map(function(item){
                if(item.name === action.data.name) {
                    used = true;
                    return action.data;
                } else {
                    return item;
                }
            });

            if(used) {
                return newState;
            } else {
                return [...state, action.data];
            }

        }
        case REMOVE_TOKEN: {
            return state.filter((item) => (item.name !== action.data));
        }
        default: {
            return state;
        }
    }
}