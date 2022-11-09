import { createSlice } from "@reduxjs/toolkit";
import { TAuthInitialState } from "../../types";
import { loginUser } from "../query/auth.query";

const initialState: TAuthInitialState = {
  isLoading: false,
  name: "",
  email: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isLoading = false;
      state.result = "SUCCESS";
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.result = "ERROR";
    });
  },
});

export default AuthSlice.reducer;
