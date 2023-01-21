import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './SharedLayout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import AniT from '../AniT/AniT';
// import Ani from 'components/Ani/Ani';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
      <AniT/>
      {/* <Ani/> */}
    </Container>
  );
};
