import {handleActions} from 'redux-actions';
import {
    PUT_PRODUCT_IN_CART,
    PUT_PRODUCT_IN_CART_REQUEST,
    PUT_PRODUCT_IN_CART_SUCCESS,
    PUT_PRODUCT_IN_CART_FAILURE
} from '../action/putProductInCart.action';
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from '../constants/request.constants';

const defaultState = {
    putProductInCartRequest: {
        status: UNCALLED,
        error: null
    }
};

const reduces = handleActions(
    {
        [PUT_PRODUCT_IN_CART]: (state) => ({
            ...state,
            putProductInCartRequest: {
                ...state.productsInCartRequest
            }
        }),
        [PUT_PRODUCT_IN_CART_REQUEST]: (state) => ({
            ...state,
            putProductInCartRequest: {
                ...state.putProductInCartRequest,
                status: REQUEST
            }
        }),
        [PUT_PRODUCT_IN_CART_SUCCESS]: (state) => ({
            ...state,
            putProductInCartRequest: {
                ...state.putProductInCartRequest,
                status: SUCCESS
            }
        }),
        [PUT_PRODUCT_IN_CART_FAILURE]: (state, action) => ({
            ...state,
            putProductInCartRequest: {
                status: FAILURE,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
