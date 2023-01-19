import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './SharedLayout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Spinner } from 'components/Spinner/Spinner';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};
