import {all, put, select, takeEvery} from 'redux-saga/effects';
import {
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_FAILURE
} from '../action/removeProductFromCart.action';
import {SUCCESS} from '../constants/request.constants';
import {PRODUCTS_IN_CART_SUCCESS} from '../action/productsInCart.action';

const removeProductFromRequest = async (id) => {
    return (await fetch('http://127.0.0.1:8000/ProductInCarts/Delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(
            {
                id
            }
        )
    })).json();
};

function* removeProductFromCart(id) {
    const productsInCart = yield select(({cart: {productsInCart}}) => productsInCart);

    productsInCart.forEach((item, iter) => {
        if (item.productId === id) {
            productsInCart.splice(iter, 1);
        }
    });

    yield put(PRODUCTS_IN_CART_SUCCESS(productsInCart))
}

function* handleRemoveProductFromCart({payload: {id, loginStatus}}) {
    try {
        let response = null;

        if (loginStatus === SUCCESS) {
            response = yield removeProductFromRequest(id);
        }

        yield removeProductFromCart(id);
        yield put(REMOVE_PRODUCT_FROM_CART_SUCCESS(response));
    } catch (e) {
        yield put(REMOVE_PRODUCT_FROM_CART_FAILURE(e.message));
    }
}

function* removeProductFromCartSaga() {
    yield all([
        takeEvery('REMOVE_PRODUCT_FROM_CART', handleRemoveProductFromCart)
    ]);
}

export default removeProductFromCartSaga;
