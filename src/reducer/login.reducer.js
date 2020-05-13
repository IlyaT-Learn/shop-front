import {handleActions} from "redux-actions";
import {
    LOGIN_ASYNC_REQUEST,
    LOGIN_ASYNC_SUCCESS,
    LOGIN_ASYNC_FAILURE
} from "../action/login.action";
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from "../constants/request.constants";

const defaultState = {
    emailAddressValue: '',
    submitRequest: {
        status: UNCALLED,
        result: "Асинхронный ивент не вызывался",
        error: null
    }
};

const reduces = handleActions(
    {
        [LOGIN_ASYNC_REQUEST]: (state) => ({
            ...state,
            submitRequest: {
                ...state.submitRequest,
                status: REQUEST,
                result: "Ивент пошел"
            }
        }),
        [LOGIN_ASYNC_SUCCESS]: (state, data) => ({
            ...state,
            emailAddressValue: data.payload.email,
            submitRequest: {
                ...state.submitRequest,
                status: SUCCESS,
                result: true
            }
        }),
        [LOGIN_ASYNC_FAILURE]: (state, action) => ({
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