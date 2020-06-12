import {handleActions} from 'redux-actions';
import {
    PRODUCTS_IN_CART_REQUEST,
    PRODUCTS_IN_CART_SUCCESS,
    PRODUCTS_IN_CART_FAILURE
} from '../action/productsInCart.action';
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from '../constants/request.constants';

const defaultState = {
    productsInCart: [],
    productsInCartRequest: {
        status: UNCALLED,
        error: null
    }
};

const reduces = handleActions(
    {
        [PRODUCTS_IN_CART_REQUEST]: (state) => ({
            ...state,
            productsInCartRequest: {
                ...state.productsInCartRequest,
                status: REQUEST
            }
        }),
        [PRODUCTS_IN_CART_SUCCESS]: (state, {payload}) => ({
            ...state,
            productsInCart: [...payload],
            productsInCartRequest: {
                ...state.productsInCartRequest,
                status: SUCCESS,
            }
        }),
        [PRODUCTS_IN_CART_FAILURE]: (state, action) => ({
            ...state,
            productsInCartRequest: {
                status: FAILURE,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
