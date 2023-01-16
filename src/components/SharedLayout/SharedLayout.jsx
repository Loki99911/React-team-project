import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Container } from './SharedLayout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Spinner } from 'components/Spinner/Spinner';

export const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
