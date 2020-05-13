import {createAction} from 'redux-actions'

export const LOGIN_ASYNC_REQUEST = createAction('LOGIN_ASYNC_REQUEST');
export const LOGIN_ASYNC_SUCCESS = createAction('LOGIN_ASYNC_SUCCESS');
export const LOGIN_ASYNC_FAILURE = createAction('LOGIN_ASYNC_FAILURE');