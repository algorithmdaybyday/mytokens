import { createStore } from 'redux';

import reducer from './reducer';


const initValues = {
    tokens: [
        { id: 1, name: 'OMG', count: 2060, price: 51, totalPrice: 21000 },
        { id: 2, name: 'PAY', count: 2060, price: 51, totalPrice: 21000 },
        { id: 3, name: 'LRC', count: 2060, price: 51, totalPrice: 21000 },
        { id: 4, name: 'SNT', count: 2060, price: 51, totalPrice: 21000 },
        { id: 5, name: 'BTC', count: 2060, price: 51, totalPrice: 21000 },
    ]
}

const store = createStore(reducer, initValues);

export default store;

