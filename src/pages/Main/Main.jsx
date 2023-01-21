import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import {
  StyledHomePage,
  Wrap,
  Link,
  ExspensesIncLink,
  LinkBox,
} from './Main.styled';
import Background from '../../components/Background/Background';
import BalanceForm from '../../components/BalanceForm/BalanceForm';
import { useMediaRules } from '../../MediaRules/MediaRules';
import { ReactComponent as IconReports } from '../../images/reports.svg';
import { Loader } from 'components/Loader/Loader';
import { Calendar } from 'components/Calendar/Calendar';
import MobileTransactionList from 'components/MobileTransactionList/MobileTransactionList';
import { setNewDate } from 'redux/Transaction/transactionReducer';
import { getCurrentDate } from 'redux/Transaction/transactionSelectors';
import { useDispatch, useSelector } from 'react-redux';

export default function Main() {
  const { isMobile } = useMediaRules();
  const newDate = useSelector(getCurrentDate);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(setNewDate(new Date()));
  }, [dispatch]);

  return (
    <>
      <Background />
      <StyledHomePage>
        <Wrap>
          <BalanceForm />
          <Link to="/reports">
            Reports
            <IconReports className="reportsIcon" />
          </Link>
        </Wrap>
        {!isMobile && (
          <>
            <LinkBox>
              <ExspensesIncLink to="expenses">Expenses</ExspensesIncLink>
              <ExspensesIncLink to="income">Income</ExspensesIncLink>
            </LinkBox>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        )}
        {isMobile && (
          <>
            <Calendar selected={newDate} />
            <MobileTransactionList />
            <LinkBox>

              <ExspensesIncLink to="/expenses">Expenses</ExspensesIncLink>
              <ExspensesIncLink to="/income">Income</ExspensesIncLink>
            </LinkBox>
          </>
        )}
      </StyledHomePage>
    </>
  );
}
