import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, call } from "redux-saga/effects";
import { logger } from "redux-logger";
import { POSTS, postsReducer, postsSaga } from "./posts";
import { USERS, usersReducer, usersSaga } from "./users";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([call(usersSaga), call(postsSaga)]);
}

const rootReducer = combineReducers({
  [POSTS]: postsReducer,
  [USERS]: usersReducer,
});

export default function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: true,
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
