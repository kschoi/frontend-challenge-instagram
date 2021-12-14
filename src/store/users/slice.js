import { createSlice } from "@reduxjs/toolkit";
import { reducerUtils } from "../../utils/async.util";

const initialState = {
  isLogin: false,
  userData: reducerUtils.initial(),
};

const name = "users";

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setIsLogin(state, { payload }) {
      state.isLogin = payload;
    },
    getUsers(state) {
      state.users = reducerUtils.loading();
    },
    getUsersSuccess(state, { payload }) {
      state.users = reducerUtils.success(payload.data);
    },
    getUsersError(state, { payload }) {
      state.users = reducerUtils.error(payload);
    },
    addUsers(state) {
      state.userData = reducerUtils.loading();
    },
    addUsersSuccess(state, { payload }) {
      state.userData = reducerUtils.success(payload.data);
    },
    addUsersError(state, { payload }) {
      state.userData = reducerUtils.error(payload);
    },
  },
});

export const usersReducer = slice.reducer;
export const usersAction = slice.actions;
export const USERS = slice.name;
