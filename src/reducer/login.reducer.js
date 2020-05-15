import {handleActions} from "redux-actions";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../action/login.action";
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from "../constants/request.constants";

const defaultState = {
    emailAddressValue: '',
    submitRequest: {
        status: UNCALLED,
        result: "Async event hasn't been called",
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
            emailAddressValue: data.payload.email,
            submitRequest: {
                ...state.submitRequest,
                status: SUCCESS,
                result: true
            }
        }),
        [LOGIN_FAILURE]: (state, action) => ({
            ...state,
            submitRequest: {
                status: FAILURE,
                result: false,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
