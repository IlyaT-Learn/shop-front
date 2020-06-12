import {handleActions} from 'redux-actions';
import {
    REMOVE_PRODUCT_FROM_CART,
    REMOVE_PRODUCT_FROM_CART_REQUEST,
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_FAILURE
} from '../action/removeProductFromCart.action';
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from '../constants/request.constants';

const defaultState = {
    removeProductFromCartRequest: {
        status: UNCALLED,
        response: null,
        error: null
    }
};

const reduces = handleActions(
    {
        [REMOVE_PRODUCT_FROM_CART]: (state) => ({
            ...state
        }),
        [REMOVE_PRODUCT_FROM_CART_REQUEST]: (state) => ({
            ...state,
            removeProductFromCartRequest: {
                ...state.removeProductFromCartRequest,
                status: REQUEST,
                response: null
            }
        }),
        [REMOVE_PRODUCT_FROM_CART_SUCCESS]: (state, action) => ({
            ...state,
            removeProductFromCartRequest: {
                ...state.removeProductFromCartRequest,
                status: SUCCESS,
                response: action.payload
            }
        }),
        [REMOVE_PRODUCT_FROM_CART_FAILURE]: (state, action) => ({
            ...state,
            removeProductFromCartRequest: {
                status: FAILURE,
                response: null,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
