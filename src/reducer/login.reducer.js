import {handleActions} from 'redux-actions';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../action/login.action';
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from '../constants/request.constants';

const defaultState = {
    submitRequest: {
        status: UNCALLED,
        currentUser: null,
        error: null
    }
};

const reduces = handleActions(
    {
        [LOGIN_REQUEST]: (state) => ({
            ...state,
            submitRequest: {
                ...state.submitRequest,
                status: REQUEST,
                currentUser: null
            }
        }),
        [LOGIN_SUCCESS]: (state, action) => ({
            ...state,
            submitRequest: {
                ...state.submitRequest,
                status: SUCCESS,
                currentUser: action.payload
            }
        }),
        [LOGIN_FAILURE]: (state, action) => ({
            ...state,
            submitRequest: {
                status: FAILURE,
                currentUser: null,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
