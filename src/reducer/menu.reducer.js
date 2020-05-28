import {handleActions} from "redux-actions";
import {
    MENU_REQUEST,
    MENU_SUCCESS,
    MENU_FAILURE
} from "../action/menu.action";
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from "../constants/request.constants";

const defaultState = {
    menuRequest: {
        status: UNCALLED,
        result: null,
        error: null
    }
};

const reduces = handleActions(
    {
        [MENU_REQUEST]: (state) => ({
            ...state,
            menuRequest: {
                ...state.menuRequest,
                status: REQUEST,
                result: null
            }
        }),
        [MENU_SUCCESS]: (state, data) => ({
            ...state,
            menuRequest: {
                ...state.menuRequest,
                status: SUCCESS,
                result: data
            }
        }),
        [MENU_FAILURE]: (state, action) => ({
            ...state,
            menuRequest: {
                status: FAILURE,
                result: null,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
