import { createSlice } from '@reduxjs/toolkit';
import { logIn, signUp, refreshUser, logout } from './authOperations';

const pending = state => {
  state.isUserFetching = true;
};
const rejected = state => {
  state.isUserFetching = false;
  state.isLoggedIn = false;
};

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isUserFetching: false,
  userData: {
    email: null,
    id: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
    addRefreshToken: (state, { payload }) => {
      state.refreshToken = payload;
    },
    addSid: (state, { payload }) => {
      state.sid = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.userData.email = payload.userData.email;
        state.userData.id = payload.userData.id;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.userData.email = payload.userData.email;
        state.userData.id = payload.userData.id;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.accessToken = payload.data.newAccessToken;
        state.refreshToken = payload.data.newRefreshToken;
        state.sid = payload.data.newSid;
        state.userData.email = payload.user.email;
        state.userData.id = payload.user.id;
        state.isLoggedIn = true;
        state.isUserFetching = false;
      })
      .addCase(logout.fulfilled, () => ({ ...initialState }))

      .addCase(refreshUser.pending, pending)
      .addCase(refreshUser.rejected, rejected),
});

export default authSlice.reducer;

export const { addAccessToken, addRefreshToken, addSid } = authSlice.actions;
