import { createSlice } from '@reduxjs/toolkit';
// import {
//   signupUser,
//   loginUser,
//   logoutUser,
//   getCurrentUser,
// } from './operations';

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLogin: false,
  },

//   extraReducers: builder => {
//     builder
//       .addCase(signupUser.fulfilled, (state, action) => {
//         state.token = action.payload.token;
//         state.user = action.payload.user;
//         state.isLogin = true;
//       })
//   },
});