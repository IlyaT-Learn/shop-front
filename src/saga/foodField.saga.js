import {all, takeEvery} from 'redux-saga/effects';
import {FOOD_FIELD_REQUEST} from '../action/foodField.action';

const foodFieldRequest = async (action) => {

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

function* foodFieldSaga() {
    yield all([
        takeEvery('FOOD_FIELD_REQUEST', foodFieldRequest)
    ]);
}

export default foodFieldSaga;
