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
    const price = result.price * result.rate || 0;
    return {
        type: FETCH_TOKEN_SUCCESS,
        data: {
            name: result.symbol,
            price: price,
            count: count,
            totalPrice: price * count,
            editable: false
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
                const data = responseJson.data[0];
                dispatch(fetchTokenSuccess(data, count));
            }).catch((error) => {
                // throw new Error('Invalid json response:' + error);
            });
        }).catch((error) => {
            dispatch(fetchTokenFailure(error));
        });
    }
}


