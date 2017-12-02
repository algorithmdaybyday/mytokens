import {
    FETCH_TOKEN_SUCCESS
} from './action_types';
import { CHANGE_PRICE } from '../list/action_types';
import {REMOVE_TOKEN} from "../list/action_types";

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_TOKEN_SUCCESS: {
            let used = false
            const newState = state.map(function(item){
                if(item.name === action.data.name) {
                    used = true;
                    if(action.data.price === null || action.data.price === 0) {
                        return { ...item };
                    } else {
                        return action.data;
                    }
                } else {
                    return { ...item };
                }
            });

            if(used) {
                return newState;
            } else {
                return [action.data, ...state];
            }

        }
        case REMOVE_TOKEN: {
            return state.filter((item) => (item.name !== action.data));
        }
        case CHANGE_PRICE: {
            return state.map((item) => {
                if(item.name === action.data.name) {
                    return {...item, price: action.data.price, totalPrice: action.data.price*item.count}
                } else {
                    return item
                }
            })
        }
        default: {
            return state;
        }
    }
}