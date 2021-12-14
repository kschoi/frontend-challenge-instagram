import { call, takeLatest, put, all, fork, select } from "redux-saga/effects";
import { usersAction } from "./slice";
import * as usersApi from "../../api/users";

function* addUsers(action) {
  const { addUsersSuccess, addUsersError } = usersAction;

  try {
    const payload = yield call(usersApi.addUsers, action.payload);

    yield put(addUsersSuccess({ data: payload.data }));
  } catch (error) {
    yield put(
      addUsersError({
        error,
      })
    );
  }
}

function* getUsers(action) {
  const { getUsersSuccess, getUsersError } = usersAction;

  try {
    const payload = yield call(usersApi.getUsers, action.payload);

    // yield delay(1000);

    yield put(getUsersSuccess({ data: payload.data }));
  } catch (error) {
    yield put(
      getUsersError({
        error,
      })
    );
  }
}

function* setIsLogin() {
  const users = yield select((state) => {
    return state.users.users;
  });

  if (users.data.length > 0) yield put(usersAction.setIsLogin(true));
  else yield put(usersAction.setIsLogin(false));
}

function* watchAddUsers() {
  yield takeLatest(usersAction.addUsers, addUsers);
}

function* watchGetUsers() {
  yield takeLatest(usersAction.getUsers, getUsers);
}

function* watchGetUsersSuccess() {
  yield takeLatest(usersAction.getUsersSuccess, setIsLogin);
}

export function* usersSaga() {
  yield all([
    fork(watchAddUsers),
    fork(watchGetUsers),
    fork(watchGetUsersSuccess),
  ]);
}
