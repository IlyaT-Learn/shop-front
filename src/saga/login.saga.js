import {takeEvery, select, put, all} from 'redux-saga/effects';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../action/login.action';

const loginRequest = async (data) => {
    const response = await fetch('http://127.0.0.1:8000/Users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    const user = await response.json();
    if (!user) {
        throw new Error('User is empty!');
    }

    return user;
};

function* onLoadLogin({payload}) {
    try {
        const user = yield loginRequest(payload);
        yield put(LOGIN_SUCCESS(user));
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
