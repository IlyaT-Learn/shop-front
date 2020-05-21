import { takeEvery, put, all } from "redux-saga/effects";
import {
  EXAMPLE_ACTION_ASYNC_FAILURE,
  EXAMPLE_ACTION_ASYNC_SUCCESS
} from "../action/example.action";
import { REGISTER_FAILURE, REGISTER_SUCCESS } from "../action/register.action";

function* handleRegisterRequest(action) {
  debugger
  try {
    const requestResult = yield fetch('http://localhost:8000/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:JSON.stringify({
        firstName: 'Илья',
        lastName: 'Тышкевич',
        login: 'iluxa',
        password: action.payload.password,
        email: 'iluxa@supershop.by',
        phone: '+375293020327'
      })
    }).json();
    yield put(REGISTER_SUCCESS());
  } catch (e) {
    console.log(e.message);
    yield put(REGISTER_FAILURE(e.message));
  }
}

function* registerSaga() {
  yield all([
    takeEvery("REGISTER_REQUEST", handleRegisterRequest)
  ]);
}

export default registerSaga;