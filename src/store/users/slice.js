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
