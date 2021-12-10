import { createSlice } from "@reduxjs/toolkit";
import { reducerUtils } from "../../utils/async.util";

const name = "posts";

const initialState = {
  posts: reducerUtils.initial(),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    getPosts(state) {
      state.posts = reducerUtils.loading();
    },
    getPostsSuccess(state, { payload }) {
      state.posts = reducerUtils.success(payload.data);
    },
    getPostsError(state, { payload }) {
      state.posts = reducerUtils.error(payload);
    },
  },
});

export const postsReducer = slice.reducer;
export const postsAction = slice.actions;
export const POSTS = slice.name;
