import {handleActions} from "redux-actions";
import {
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_FAILURE
} from "../action/contactUs.action";
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from "../constants/request.constants";

const defaultState = {
    contactRequest: {
        status: UNCALLED,
        error: null
    }
};

const reduces = handleActions(
    {
        [CONTACT_REQUEST]: (state) => ({
            ...state,
            contactRequest: {
                ...state.submitRequest,
                status: REQUEST
            }
        }),
        [CONTACT_SUCCESS]: (state) => ({
            ...state,
            contactRequest: {
                ...state.submitRequest,
                status: SUCCESS
            }
        }),
        [CONTACT_FAILURE]: (state, action) => ({
            ...state,
            contactRequest: {
                status: FAILURE,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
