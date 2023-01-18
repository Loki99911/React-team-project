import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  signUpUserAPI,
  logInUserAPI,
  logOutUserAPI,
  fullUserInfoAPI,
  userBalanceAPI,
} from 'service/API/kapustaAuth&UserAPI';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const setRefreshToken = refreshToken => {
  if (refreshToken !== '') {
    return (axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`);
  }
  axios.defaults.headers.common.Authorization = '';
};

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await logInUserAPI(user);
      console.log('LOGGED IN ');
      console.log('access token in login:', data.accessToken);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUp = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue, dispatch }) => {
    try {
      await signUpUserAPI(user);
      const data = await logInUserAPI(user);
      console.log('sign up data:', data);
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        console.log('duplicate');
      }
      return rejectWithValue(error);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOutUserAPI();
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedRefreshToken = state.auth.refreshToken;
    const persistedAccessToken = state.auth.accessToken;
    const persistedSid = { sid: state.auth.sid };

    if (!persistedRefreshToken) {
      return rejectWithValue();
    }
    setRefreshToken(persistedRefreshToken);
    try {
      const { data } = await axios.post('/auth/refresh', persistedSid);
      token.set(data.newAccessToken);
      const user = await fullUserInfoAPI();
      return { data, user };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleUserBalance = createAsyncThunk(
  'auth/userBalance',
  async (balance, { rejectWithValue }) => {
    try {
      const data = await userBalanceAPI({ newBalance: balance });
      return data;
    } catch (error) {
      console.log('error in handleUserBalance ');
      return rejectWithValue(error.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     // console.log(state);
//     const persistedToken = state.auth.refreshToken;
//     const persistedSid = { sid: state.auth.sid };
//     console.log(persistedToken);

//     if (persistedToken === null) {
//       return rejectWithValue();
//     }

//     token.set(persistedToken);
//     try {
//       const data = await axios.post('/auth/refresh', persistedSid);
//       token.set(data.newAccessToken);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const getFullUserInfo = createAsyncThunk(
//   'auth/FullUserInfo',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { accessToken } = getState().auth;
//       token.set(accessToken);
//       const data = await fullUserInfoAPI();
//       return data;
//     } catch (error) {
//       console.log('Unauthorized. Please login again');
//       return rejectWithValue(error);
//     }
//   }
// );
