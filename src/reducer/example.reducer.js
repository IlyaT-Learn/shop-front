import { handleActions } from "redux-actions";
import {
  DROP_EXAMPLE_ACTION,
  EXAMPLE_ACTION,
  EXAMPLE_ACTION_ASYNC_FAILURE,
  EXAMPLE_ACTION_ASYNC_REQUEST,
  EXAMPLE_ACTION_ASYNC_SUCCESS
} from "../action/example.action";
import { FAILURE, REQUEST, SUCCESS, UNCALLED } from "../constants/request.constants";

const defaultState = {
  exampleValue: 0,
  exampleRequest: {
    status: UNCALLED,
    result: "Асинхронный ивент не вызывался",
    error: null
  }
};

const reduces = handleActions(
  {
    [EXAMPLE_ACTION]: (state) => ({
      ...state,
      exampleValue: state.exampleValue + 1
    }),
    [DROP_EXAMPLE_ACTION]: (state) => ({
      ...state,
      exampleValue: defaultState.exampleValue
    }),
    [EXAMPLE_ACTION_ASYNC_REQUEST]: (state) => ({
      ...state,
      exampleRequest: {
        ...state.exampleRequest,
        status: REQUEST,
        result: "Ивент пошел"
      }
    }),
    [EXAMPLE_ACTION_ASYNC_SUCCESS]: (state, action) => ({
      ...state,
      exampleRequest: {
        ...state.exampleRequest,
        status: SUCCESS,
        result: `Ивент выполнился: ${action.payload}`
      }
    }),
    [EXAMPLE_ACTION_ASYNC_FAILURE]: (state, action) => ({
      ...state,
      exampleRequest: {
        status: FAILURE,
        result: "Абшипка",
        error: action.payload
      }
    })
  },
  defaultState
);

export default reduces;
