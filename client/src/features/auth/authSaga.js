import { all, call, put, takeLatest } from "redux-saga/effects";
import authTypes from "./authActionType";
import { registerUser } from "./authApi";
import { registerFailure, registerSuccess } from "./authAction";

function* registerSaga(action) {
    try {
        const response = yield call(
            registerUser,
            action.payload
        );

        yield put(registerSuccess(response));
    } catch (error) {
        yield put(registerFailure(error.message));
    }
}

function* authSaga() {
    yield all([
        takeLatest(
            authTypes.REGISTER_REQUEST,
            registerSaga
        ),
    ]);
}

export default authSaga