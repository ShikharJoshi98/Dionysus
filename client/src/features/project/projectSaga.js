import { all, call, put, takeLatest } from "redux-saga/effects";
import projectType from "./projectActionType";
import { createProject, getProjects } from "./projectApi";
import { createProjectFailure, createProjectSuccess, getProjectsFailure, getProjectsSuccess } from "./projectAction";

function* createProjectSaga(action) {
    try {
        const response = yield call(
            createProject,
            action.payload
        );

        yield put(createProjectSuccess(response));
    } catch (error) {
        yield put(createProjectFailure(error.message));
    }
}

function* getProjectsSaga(action) {
    try {
        const response = yield call(
            getProjects,
            action.payload
        );

        yield put(getProjectsSuccess(response));
    } catch (error) {
        yield put(getProjectsFailure(error.message));
    }
}

function* projectSaga() {
    yield all([
        takeLatest(
            projectType.PROJECT_CREATE_REQUEST,
            createProjectSaga
        ),
        takeLatest(
            projectType.PROJECT_GET_ALL_REQUEST,
            getProjectsSaga
        )
    ])
}

export default projectSaga