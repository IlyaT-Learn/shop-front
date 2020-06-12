import {handleActions} from 'redux-actions';
import {MENU_REQUEST, MENU_SUCCESS, MENU_FAILURE} from '../action/menu.action';
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from '../constants/request.constants';

const defaultState = {
    menuRequest: {
        status: UNCALLED,
        categories: null,
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
                categories: null
            }
        }),
        [MENU_SUCCESS]: (state, action) => ({
            ...state,
            menuRequest: {
                ...state.menuRequest,
                status: SUCCESS,
                categories: action.payload.allCategories.rows
            }
        }),
        [MENU_FAILURE]: (state, action) => ({
            ...state,
            menuRequest: {
                status: FAILURE,
                categories: null,
                error: action.payload
            }
        })
    },
    defaultState
);

export default reduces;
