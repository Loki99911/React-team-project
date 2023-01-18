import { createSlice } from '@reduxjs/toolkit';
import { logIn, signUp, refreshUser, logout } from './authOperations';

// const pending = state => {
//   state.isLoading = true;
// };
// const rejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  userData: {
    email: null,
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
        state.userData.email = payload.userData.email;
        state.userData.id = payload.userData.id;
        state.userData.transactions = payload.userData.transactions;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.userData.email = payload.userData.email;
        state.userData.id = payload.userData.id;
        state.userData.transactions = payload.userData.transactions;
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
      })
      .addCase(logout.fulfilled, () => ({ ...initialState })),
});

export default authSlice.reducer;
