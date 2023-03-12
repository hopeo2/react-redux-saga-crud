import { put, take, takeEvery } from 'redux-saga/effects'
import { createUserAPI, deleteUserByIdAPI, getUseraByIdAPI, getUsersAPI, updateUserAPI } from "../../apis"
import { setUserSlice } from '../slice/user'
import { addUsersSlice, deleteUsersSlice, editUsersSlice, getUsersSlice } from "../slice/users"
import { CREATE_USER, DELETE_USER_BY_ID, GET_USERS, GET_USER_BY_ID, UPDATE_USER_BY_ID } from '../types'

export function* getUsersSaga() {
    const users = yield getUsersAPI()
    yield put(getUsersSlice(users.data))
}

export function* getUserByIdSaga(action) {
    yield getUseraByIdAPI(action.id)
    yield put(setUserSlice(action.id))
}

export function* createUserSaga(action) {
    yield createUserAPI(action.user)
    yield put(addUsersSlice(action.user))
}

export function* updateUserSaga(action) {
    yield updateUserAPI(action.user)
    yield put(editUsersSlice(action.user))
}

export function* deleteUserByIdSaga(action) {
    yield deleteUserByIdAPI(action.id)
    yield put(deleteUsersSlice(action.id))
}


export function* watchUserAsync() {
    yield takeEvery(GET_USERS, getUsersSaga)
    yield takeEvery(GET_USER_BY_ID, getUserByIdSaga)
    yield takeEvery(CREATE_USER, createUserSaga)
    yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga)
    yield takeEvery(DELETE_USER_BY_ID, deleteUserByIdSaga)
}