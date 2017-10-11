import {
    ADD_TOKEN
} from './action_types';

export default (state, action) => {
    switch(action.type) {
        case ADD_TOKEN: {
            return {
                ...state,
                tokens: [
                    ...state['tokens'],
                    action.data
                ]
            }
        }
        default: {
            return state;
        }
    }
}