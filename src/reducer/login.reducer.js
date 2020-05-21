import {handleActions} from "redux-actions";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../action/login.action";
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from "../constants/request.constants";

const defaultState = {
    submitRequest: {
        status: UNCALLED,
        result: null,
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
                result: null
            }
        }),
        [LOGIN_SUCCESS]: (state, data) => ({
            ...state,
            submitRequest: {
                ...state.submitRequest,
                status: SUCCESS,
                result: data
            }
        }),
        [LOGIN_FAILURE]: (state, action) => ({
            ...state,
            submitRequest: {
                status: FAILURE,
                result: null,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
