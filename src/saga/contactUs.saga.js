import {takeEvery, put, all} from 'redux-saga/effects';
import {CONTACT_SUCCESS, CONTACT_FAILURE} from '../action/contactUs.action';

const contactCreateRequest = async (data) => {
    const response = await fetch('http://127.0.0.1:8000/Contacts/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });

    if (response.status !== 200) {
        throw new Error('Creation failed');
    }
};

function* onLoadContact({payload}) {
    try {
        yield contactCreateRequest(payload);
        yield put(CONTACT_SUCCESS());
    } catch (e) {
        yield put(CONTACT_FAILURE(e.message));
    }
}

function* contactSaga() {
    yield all([
        takeEvery('CONTACT_REQUEST', onLoadContact)
    ]);
}

export default contactSaga;
