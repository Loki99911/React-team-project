import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { PublicRoute, PrivateRoute } from '../service/routes';
import { useMediaRules } from '../MediaRules/MediaRules';
import { refreshUser, token } from 'redux/Auth/authOperations';
import { getIsUserFetching } from 'redux/Auth/authSelectors';
import { Loader } from './Loader/Loader';
import {
  addAccessToken,
  addRefreshToken,
  addSid,
} from 'redux/Auth/authReducer';

const Register = lazy(() => import('../pages/Register/Register'));
const Main = lazy(() => import('../pages/Main/Main'));
const Expenses = lazy(() => import('../pages/Expenses/Expenses'));
const Income = lazy(() => import('../pages/Income/Income'));
const Reports = lazy(() => import('../pages/Reports/Reports'));

export const App = () => {
  const isUserFetching = useSelector(getIsUserFetching);
  const dispatch = useDispatch();

  // Google auth code below
  // Location for google authorization

  const location = window.location;
  const urlSearchParams = new URLSearchParams(location.search);
  const accessToken = urlSearchParams.get('accessToken');
  const refreshToken = urlSearchParams.get('refreshToken');
  const sid = urlSearchParams.get('sid');
  console.log('search params:', accessToken);

  // Change pathname if succesfull google authorization
  useEffect(() => {
    if (accessToken) {
      token.set(accessToken);
      dispatch(addAccessToken(accessToken));
      dispatch(addRefreshToken(refreshToken));
      dispatch(addSid(sid));
      dispatch(refreshUser());

      if (location.pathname === '/') {
        location.pathname = '/React-team-project/main/expenses';
      }
    }
  }, [accessToken, dispatch, location, refreshToken, sid]);
  // Google auth code above

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const { isMobile } = useMediaRules();
  return isUserFetching ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />
        {!isMobile && (
          <>
            <Route
              path="/main"
              element={
                <PrivateRoute>
                  <Main />
                </PrivateRoute>
              }
            >
              <Route index element={<Navigate to="/main/expenses" />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="income" element={<Income />} />
            </Route>{' '}
            <Route path="*" element={<Navigate to="/main" />} />
          </>
        )}
        {isMobile && (
          <>
            <Route path="/main" element={<Main />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/income" element={<Income />} />
            <Route path="*" element={<Navigate to="/main" />} />
          </>
        )}

        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <Reports />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
