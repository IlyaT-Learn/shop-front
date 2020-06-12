import {takeEvery, put, all, select} from 'redux-saga/effects';
import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../action/login.action';
import {PRODUCTS_IN_CART_REQUEST} from '../action/productsInCart.action';

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

function* combineCart(payload) {
    const productInCartArray = yield select(({cart: {productsInCart}}) => productsInCart);

    productInCartArray.forEach(async (item) => {
        await fetch('http://127.0.0.1:8000/ProductInCarts/Add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(
                {
                    productId: item.productId,
                    userId: payload
                }
            )
        });
    });

    yield productInCartArray.length = 0;
    yield put(PRODUCTS_IN_CART_REQUEST(payload));
}

function* onLoadLogin({payload}) {
    try {
        const user = yield loginRequest(payload);
        yield combineCart(user.id);
        yield put(LOGIN_SUCCESS(user));
    } catch (e) {
        yield put(LOGIN_FAILURE(e.message));
    }
}

function* loginSaga() {
    yield all([
        takeEvery('LOGIN_REQUEST', onLoadLogin)
    ]);
}

export default loginSaga;
