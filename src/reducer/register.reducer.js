import {handleActions} from 'redux-actions';
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from '../constants/request.constants';
import {REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS} from '../action/register.action';

const defaultState = {
    registerRequest: {
        status: UNCALLED,
        result: null,
        error: null
    }
};

const reduces = handleActions(
    {
        [REGISTER_REQUEST]: (state) => ({
            ...state,
            registerRequest: {
                ...defaultState.registerRequest,
                status: REQUEST
            }
        }),
        [REGISTER_SUCCESS]: (state, action) => ({
            ...state,
            registerRequest: {
                ...state.registerRequest,
                status: SUCCESS,
                result: action.payload
            }
        }),
        [REGISTER_FAILURE]: (state, action) => ({
            ...state,
            registerRequest: {
                ...state.registerRequest,
                error: action.payload,
                status: FAILURE
            }
        })
    },
    defaultState
);

export default reduces;
