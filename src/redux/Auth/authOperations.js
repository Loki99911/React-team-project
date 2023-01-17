import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { signUpUserAPI, logInUserAPI } from 'service/API/kapustaAuth&UserAPI';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await logInUserAPI(user);
      console.log('LOGGED IN ');
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
      const credentials = await signUpUserAPI(user);
      const data = await dispatch(logIn(user));
      return data.payload;
    } catch (error) {
      if (error.response.status === 409) {
        console.log('duplicate');
      }
      return rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.refreshToken;
    const persistedSid = { sid: state.auth.sid };

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const data = await axios.post('/auth/refresh', persistedSid);
      token.set(data.newAccessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
