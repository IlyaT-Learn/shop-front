import {all, put, takeEvery} from 'redux-saga/effects';
import {PRODUCTS_FAILURE, PRODUCTS_SUCCESS} from '../action/products.action';

const productsRequest = async (id) => {
    const products = await (await fetch('http://127.0.0.1:8000/Categories/getProductsOfCategory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(
            {
                categoryId: id,
                pageSize: 100,
                currentPage: 1
            }
        )
    })).json();

    if (!products) {
        throw new Error('No Products Found');
    }

    return products;
};

function* loadProducts({payload}) {
    try {
        const products = yield productsRequest(payload);
        yield put(PRODUCTS_SUCCESS(products));
    } catch (e) {
        yield put(PRODUCTS_FAILURE(e.message));
    }
}

function* productsSaga() {
    yield all([
        takeEvery('PRODUCTS_REQUEST', loadProducts)
    ]);
}

export default productsSaga;
