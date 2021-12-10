import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { POSTS, postsReducer } from "./posts";

const sagaMiddleware = createSagaMiddleware();

// 리덕스 툴킷에서 제공하는 combineReducers를 사용해서 여러 reducer를 묶었습니다.
const rootReducer = combineReducers({
  [POSTS]: postsReducer,
});

/**
 * configureStore
 *
 * @see https://redux-toolkit.js.org/api/configureStore
 */
const store = () =>
  configureStore({
    // rootReducer를 스토어 설정 reducer에 등록했습니다.
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: true,
  });

export default store;
