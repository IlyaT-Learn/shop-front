import {all, takeEvery} from 'redux-saga/effects';
import {PRODUCTS_REQUEST} from '../action/products.action';

const productsRequest = async (action) => {

    return (await fetch('http://127.0.0.1:8000/Categories/getProductsOfCategory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(
            {
                categoryId: action.payload,
                pageSize: 100,
                currentPage: 1
            }
        )
    })).json();
};

function* productsSaga() {
    yield all([
        takeEvery('PRODUCTS_REQUEST', productsRequest)
    ]);
}

export default productsSaga;
