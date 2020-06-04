import {handleActions} from 'redux-actions';
import {PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE} from '../action/products.action';
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from '../constants/request.constants';

const defaultState = {
    productsRequest: {
        status: UNCALLED,
        products: null,
        error: null
    }
};

const reduces = handleActions(
    {
        [PRODUCTS_REQUEST]: (state) => ({
            ...state,
            productsRequest: {
                ...state.productsRequest,
                status: REQUEST,
                products: null
            }
        }),
        [PRODUCTS_SUCCESS]: (state, data) => ({
            ...state,
            productsRequest: {
                ...state.productsRequest,
                status: SUCCESS,
                products: data
            }
        }),
        [PRODUCTS_FAILURE]: (state, action) => ({
            ...state,
            productsRequest: {
                status: FAILURE,
                products: null,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
