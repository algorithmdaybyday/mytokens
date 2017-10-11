import {
    FETCH_TOKEN_FAILURE,
    FETCH_TOKEN_SUCCESS,
    FETCH_TOKEN_REQUEST
} from './action_types';

export const fetchTokenRequest = () => {
    return {
        type: FETCH_TOKEN_REQUEST
    }
};

export const fetchTokenSuccess = (result, count) => {
    return {
        type: FETCH_TOKEN_SUCCESS,
        data: {
            name: result.symbol,
            price: result.price,
            count: count,
            totalPrice: result.price * count
        }
    }

};

export const fetchTokenFailure = (error) => {
    return {
        type: FETCH_TOKEN_FAILURE,
        error
    }
};


export const fetchToken = (tokenName, count) => {
    return (dispatch) => {
        const url = 'https://block.cc/api/query?str=';

        dispatch(fetchTokenRequest());

        fetch(url + tokenName).then((response) => {
            if(response.status !== 200) {
                throw new Error("Fail to get response with status " + response.status);
            }
            response.json().then((responseJson) => {
                dispatch(fetchTokenSuccess(responseJson.data[0], count));
            }).catch((error) => {
                throw new Error('Invalid json response:' + error);
            });
        }).catch((error) => {
            dispatch(fetchTokenFailure(error));
        });
    }
}


