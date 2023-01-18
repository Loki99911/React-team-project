import { configureStore } from '@reduxjs/toolkit';
// import { authSlice } from './authSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import transactionReducer from './Transaction/transactionReducer';
import authReducer from './Auth/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'sid', 'accessToken'],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
