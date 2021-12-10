import { call, takeLatest, put, all, fork, delay } from "redux-saga/effects";
import { postsAction } from "./slice";
import * as postsApi from "../../api/posts";

function* getPosts() {
  // 액션을 가져옵니다.
  const { getPostsSuccess, getPostsError } = postsAction;

  // 액션을 언제 실행할지 분기합니다.
  try {
    // api를 호출합니다.
    const payload = yield call(postsApi.getPosts);

    // deloy를 줄 수 있습니다.
    // yield delay(3000);

    // 성공하면 getPostsSuccess 액션을 디스패치합니다.
    yield put(getPostsSuccess({ data: payload.data }));
  } catch (error) {
    // 실패하면 getPostsError 액션을 디스패치합니다.
    yield put(
      getPostsError({
        error,
      })
    );
  }
}

// getPost 라는 액션이 디스패치되면, getPosts를 실행하도록 감지
function* watchGetPosts() {
  yield takeLatest(postsAction.getPosts, getPosts);
}

// 사가를 내보냅니다.
export function* postsSaga() {
  yield all([fork(watchGetPosts)]);
}
