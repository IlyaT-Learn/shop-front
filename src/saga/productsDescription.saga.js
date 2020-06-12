import {all, put, select, takeEvery} from 'redux-saga/effects';
import {PRODUCTS_DESCRIPTION_SUCCESS, PRODUCTS_DESCRIPTION_FAILURE} from '../action/productsDescription.action';

const productsDescriptionRequest = async () => {
    const resultMap = new Map();

    const {allProduct: {rows}} = await (await fetch('http://127.0.0.1:8000/Products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })).json();

    rows.forEach((item) => {
        resultMap.set(item.id, item);
    });

    return resultMap;
}

function* loadDescriptionProducts({payload}) {
    try {
        const productsDescriptionMap = yield productsDescriptionRequest(payload);
        yield put(PRODUCTS_DESCRIPTION_SUCCESS(productsDescriptionMap));
    } catch (e) {
        yield put(PRODUCTS_DESCRIPTION_FAILURE(e.message));
    }
}

function* productsDescriptionSaga() {
    yield all([
        takeEvery('PRODUCTS_DESCRIPTION_REQUEST', loadDescriptionProducts)
    ]);
}

export default productsDescriptionSaga;
