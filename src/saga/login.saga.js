import {takeEvery, select, put, all} from 'redux-saga/effects';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../action/login.action';

const Request = async (data) => {
    let response = await fetch('http://127.0.0.1:8000/Users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data.payload)
    });
    let token = await response.json();

    localStorage.setItem('token', token)

    return true;
};

function* onLoadLogin(action) {
    try {
        yield Request(action);
        yield put(LOGIN_SUCCESS(action.payload));
    } catch (e) {
        yield put(LOGIN_FAILURE(e.message));
    }
}

function* loginSaga() {
    yield all([
        takeEvery("LOGIN_REQUEST", onLoadLogin)
    ]);
}

export default loginSaga;
