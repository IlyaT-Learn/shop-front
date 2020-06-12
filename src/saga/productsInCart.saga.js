import {all, put, select, takeEvery} from 'redux-saga/effects';
import {PRODUCTS_IN_CART_FAILURE, PRODUCTS_IN_CART_SUCCESS} from '../action/productsInCart.action';

const productsInCartRequest = async (userId) => {
    return (await fetch('http://127.0.0.1:8000/ProductInCarts/userCart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(
            {
                userId
            }
        )
    })).json();
};

function* loadCart({payload}) {
    try {
        const {cartCurrentUser} = yield productsInCartRequest(payload);
        yield put(PRODUCTS_IN_CART_SUCCESS(cartCurrentUser));
    } catch (e) {
        yield put(PRODUCTS_IN_CART_FAILURE(e.message));
    }
}

function* productsInCartSaga() {
    yield all([
        takeEvery('PRODUCTS_IN_CART_REQUEST', loadCart)
    ]);
}

export default productsInCartSaga;
