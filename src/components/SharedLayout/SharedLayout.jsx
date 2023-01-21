import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './SharedLayout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import AniT from '../AniT/AniT';
import { useSelector } from 'react-redux';
import { getExpencesTransactions, getIncomesTransactions } from 'redux/Transaction/transactionSelectors';
// import Ani from 'components/Ani/Ani';

export const SharedLayout = () => {
   const income = useSelector(getIncomesTransactions);
   const expenses = useSelector(getExpencesTransactions);
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
      <AniT color={'green'} />
      {/* <Ani/> */}
    </Container>
  );
};
