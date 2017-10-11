import * as ActionTypes from './action_types';

export const removeToken = (name) => {
    return {
        type: ActionTypes.REMOVE_TOKEN,
        data: name
    }
}

export const changePrice = (name, price) => {
		return {
				type: ActionTypes.CHANGE_PRICE,
				data: {
						name: name,
						price: price
				}
		}
}