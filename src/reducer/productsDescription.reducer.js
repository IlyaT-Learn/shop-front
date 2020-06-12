import {handleActions} from 'redux-actions';
import {
    PRODUCTS_DESCRIPTION_REQUEST,
    PRODUCTS_DESCRIPTION_SUCCESS,
    PRODUCTS_DESCRIPTION_FAILURE
} from '../action/productsDescription.action';
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from '../constants/request.constants';

const defaultState = {
    storage: new Map(),
    productDescriptionRequest: {
        status: UNCALLED,
        error: null
    }
};

const reduces = handleActions(
    {
        [PRODUCTS_DESCRIPTION_REQUEST]: (state) => ({
            ...state,
            productDescriptionRequest: {
                ...state.productDescriptionRequest,
                status: REQUEST,
                error: null
            }
        }),
        [PRODUCTS_DESCRIPTION_SUCCESS]: (state, {payload}) => ({
            ...state,
            storage: payload,
            productByIdRequest: {
                ...state.productByIdRequest,
                status: SUCCESS
            }
        }),
        [PRODUCTS_DESCRIPTION_FAILURE]: (state, action) => ({
            ...state,
            productByIdRequest: {
                status: FAILURE,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
