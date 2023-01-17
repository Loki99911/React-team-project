import { createSlice } from '@reduxjs/toolkit';
import { logIn, signUp, refreshUser } from './authOperations';

const pending = state => {
  state.isLoading = true;
};
const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  userData: {
    email: null,
    balance: null,
    id: null,
    transactions: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.userData = payload.userData;
        state.userData.id = payload.userData.id;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.userData = payload.userData;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isLoggedIn = true;
        state.isRefreshingUser = false;
      }),
});

export default authSlice.reducer;
