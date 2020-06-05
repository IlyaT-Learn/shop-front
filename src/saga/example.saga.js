//select не удалять, для получения из сторы чегото, не удалять только в примере, обязательно его добавлять не нужно
import {takeEvery, put, all} from 'redux-saga/effects';
import {EXAMPLE_ACTION_ASYNC_FAILURE, EXAMPLE_ACTION_ASYNC_SUCCESS} from '../action/example.action';

function timeout(ms) {
    return new Promise(resolve => setTimeout(() => {
        resolve(console.log('ASYNC EVENT'));
    }, ms));
}

const emitRequest = async () => {
    await timeout(5000);
    return true;
};

function* onLoadExample(action) {
    try {
        yield emitRequest();
        yield put(EXAMPLE_ACTION_ASYNC_SUCCESS(new Date()));
    } catch (e) {
        console.log(e.message);
        yield put(EXAMPLE_ACTION_ASYNC_FAILURE(e.message));
    }
}

function* exampleSaga() {
    yield all([
        takeEvery('EXAMPLE_ACTION_ASYNC_REQUEST', onLoadExample)
    ]);
}

export default exampleSaga;