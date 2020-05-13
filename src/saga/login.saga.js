import {takeEvery, select, put, all} from "redux-saga/effects";
import {
    LOGIN_ASYNC_SUCCESS,
    LOGIN_ASYNC_FAILURE
} from "../action/login.action";

function timeout(ms) {
    return new Promise(resolve => setTimeout(() => {
        resolve(console.log("ASYNC EVENT"));
    }, ms));
}

const emitRequest = async () => {
    await timeout(1000);
    return true;
};

function* onLoadExample(action) {
    try {
        yield emitRequest();
        yield put(LOGIN_ASYNC_SUCCESS(action.payload));
    } catch (e) {
        console.log(e.message);
        yield put(LOGIN_ASYNC_FAILURE(e.message));
    }
}

function* loginSaga() {
    yield all([
        takeEvery("LOGIN_ASYNC_REQUEST", onLoadExample)
    ]);
}

export default loginSaga;