import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      token.set(data.accessToken);
      return data;
    } catch (error) {
      if (error.response.status === 403) {
        toast.error(
          'Invalid email or password. Please check data you entered! ',
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
        return;
      }
      toast.error('Something went wrong. Please try again!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const signUp = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      await signUpUserAPI(user);
      const data = await logInUserAPI(user);
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.info(
          'User with such email email already exists! Please Log In ',
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
        return;
      }
      toast.error('Something went wrong. Please try again!', {
        position: toast.POSITION.TOP_RIGHT,
      });
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
      toast.error('Something went wrong. Please try again!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return rejectWithValue(error.response.status);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedRefreshToken = state.auth.refreshToken;
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
    const id = toast.loading('Please wait...');

    try {
      const data = await userBalanceAPI({ newBalance: balance });
      toast.update(id, {
        render: 'Balance updated!',
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });

      return data;
    } catch (error) {
      toast.update(id, {
        render: 'Something went wrong. Please try again ',
        type: toast.TYPE.ERROR,
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
      return rejectWithValue(error.message);
    }
  }
);
