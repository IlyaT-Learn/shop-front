import {takeEvery, put, all} from 'redux-saga/effects';
import {MENU_SUCCESS, MENU_FAILURE} from '../action/menu.action';

const menuRequest = async () => {
    const response = await fetch('http://127.0.0.1:8000/Categories/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            pageSize: 100,
            currentPage: 1
        })
    });
    const categories = await response.json();

    if (!categories) {
        throw new Error('Category is empty!');
    }

    return categories;
};

function* loadMenu({payload}) {
    try {
        const categories = yield menuRequest(payload);
        yield put(MENU_SUCCESS(categories));
    } catch (e) {
        yield put(MENU_FAILURE(e.message));
    }
}

function* menuSaga() {
    yield all([
        takeEvery('MENU_REQUEST', loadMenu)
    ]);
}

export default menuSaga;
