import React from 'react';
import { Route, Routes} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
// import { PublicRoute, PrivateRoute } from '../service/routes';

const Register = lazy(() => import('../pages/Register/Register'));
const Main = lazy(() => import('../pages/Main/Main'));
const Expenses = lazy(() => import('../pages/Expenses/Expenses'));
const Income = lazy(() => import('../pages/Income/Income'));
const Reports = lazy(() => import('../pages/Reports/Reports'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={<Register />}
        />
        <Route
          path="/main"
          element={<Main />}
        >
          <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
        </Route>
        <Route
          path="/reports"
          element={<Reports />}
        />
      </Route>
    </Routes>
  );
};
