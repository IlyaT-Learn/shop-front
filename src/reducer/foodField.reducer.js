import {handleActions} from 'redux-actions';
import {FOOD_FIELD_REQUEST, FOOD_FIELD_SUCCESS, FOOD_FIELD_FAILURE} from '../action/foodField.action';
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from '../constants/request.constants';

const defaultState = {
    fooFieldRequest: {
        status: UNCALLED,
        products: null,
        error: null
    }
};

const reduces = handleActions(
    {
        [FOOD_FIELD_REQUEST]: (state) => ({
            ...state,
            foodFieldRequest: {
                ...state.foodFieldRequest,
                status: REQUEST,
                products: null
            }
        }),
        [FOOD_FIELD_SUCCESS]: (state, data) => ({
            ...state,
            fooFieldRequest: {
                ...state.foodFieldRequest,
                status: SUCCESS,
                products: data
            }
        }),
        [FOOD_FIELD_FAILURE]: (state, action) => ({
            ...state,
            foodFieldRequest: {
                status: FAILURE,
                products: null,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
