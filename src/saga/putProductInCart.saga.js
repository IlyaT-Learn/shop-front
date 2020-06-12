import {all, put, select, takeEvery} from 'redux-saga/effects';
import {
    PUT_PRODUCT_IN_CART_SUCCESS,
    PUT_PRODUCT_IN_CART_FAILURE,
    PUT_PRODUCT_IN_CART_REQUEST
} from '../action/putProductInCart.action';

const putProductInCartRequest = async ({productId, userId}) => {
    return (await fetch('http://127.0.0.1:8000/ProductInCarts/Add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(
            {
                productId,
                userId
            }
        )
    })).json();
};

function* updateProductInCartState({productId, number = 1}, response = undefined) {
    const productInCartArray = yield select(({cart: {productsInCart}}) => productsInCart);

    if (response) {
        if (response.status === 'update') {
            productInCartArray.forEach((item, iter) => {
                if (item.id === response.record.id) {
                    productInCartArray[iter] = response.record;
                }
            });
        } else if (response.status === 'create') {
            productInCartArray.push(response.record);
        }
    } else {
        const needAdded = !(productInCartArray.some((item, iter) => {
            if (item.productId === productId) {
                productInCartArray[iter].number += 1;

                return true;
            }

            return false;
        }));

        if (needAdded) {
            productInCartArray.push({
                id: undefined,
                productId,
                userId: undefined,
                number
            });
        }
    }
}

function* handlePutProductInCart({payload}) {
    try {
        if (payload.userId) {
            yield put(PUT_PRODUCT_IN_CART_REQUEST(payload));
            const response = yield putProductInCartRequest(payload);
            yield updateProductInCartState(payload, response);
            yield put(PUT_PRODUCT_IN_CART_SUCCESS());
        } else {
            yield updateProductInCartState(payload);
        }
    } catch (e) {
        yield put(PUT_PRODUCT_IN_CART_FAILURE(e.message));
    }
}

function* putProductInCartSaga() {
    yield all([
        takeEvery('PUT_PRODUCT_IN_CART', handlePutProductInCart)
    ]);
}

export default putProductInCartSaga;
