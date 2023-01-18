import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
// import { PublicRoute, PrivateRoute } from '../service/routes';
import { useMediaRules } from '../MediaRules/MediaRules';

const Register = lazy(() => import('../pages/Register/Register'));
const Main = lazy(() => import('../pages/Main/Main'));
const Expenses = lazy(() => import('../pages/Expenses/Expenses'));
const Income = lazy(() => import('../pages/Income/Income'));
const Reports = lazy(() => import('../pages/Reports/Reports'));

export const App = () => {
  const { isMobile } = useMediaRules();
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Register />} />
        {!isMobile && (
          <>
            <Route path="/main" element={<Main />}>
              <Route path="expenses" element={<Expenses />} />
              <Route path="income" element={<Income />} />
            </Route>{' '}
          </>
        )}
        {isMobile && (
          <>
            <Route path="/main" element={<Main />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/income" element={<Income />} />
          </>
        )}

        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};
