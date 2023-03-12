import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import user from "./redux/slice/user";
import users from "./redux/slice/users";
import {rootSaga} from "./redux/sagas"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        user: user,
        users: users,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga)

export default store;
