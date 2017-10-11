import {
    ADD_TOKEN
} from './action_types';


export const add_token = (name, count) => {
    return {
        type: ADD_TOKEN,
        data: {
            id: 10,
            name: name,
            count: count,
            price: 1,
            totalPrice: 120
        }
    }
}

