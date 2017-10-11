import * as ActionTypes from './action_types';

export const removeToken = (name) => {
    return {
        type: ActionTypes.REMOVE_TOKEN,
        data: name
    }
}