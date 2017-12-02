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
    const price = (result.price * 6.6666) || 0;
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
        const url = 'https://block.cc/api/v1/query?str=';

        dispatch(fetchTokenRequest());

        if(tokenName === undefined) {
            return
        }

        console.log(tokenName)
        fetch(url + tokenName.toLowerCase() + '&act=q').then((response) => {
            if(response.status !== 200) {
                throw new Error("Fail to get response with status " + response.status);
            }
            response.json().then((responseJson) => {
                let responseData = responseJson.data.data
                let data = responseData[0]
                if(data.symbol !== tokenName) {
                    data = responseData[1]
                }
                // if(responseData.length > 2) {
                //      data = responseData[1];
                // }
                dispatch(fetchTokenSuccess(data, count));
            }).catch((error) => {
                // throw new Error('Invalid json response:' + error);
                let data = {
                    symbol: tokenName,
                    name: tokenName,
                    price: 0,
                    rate: 0,
                }
                if(tokenName !== undefined) {
                    dispatch(fetchTokenSuccess(data, count));
                }
            });
        }).catch((error) => {
            // dispatch(fetchTokenFailure(error));
            let data = {
                symbol: tokenName,
                name: tokenName,
                price: 0,
                rate: 0,
            }
            if(tokenName !== undefined) {
                dispatch(fetchTokenSuccess(data, count));
            }
        });
    }
}


