import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
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

export default function Main() {
  const { isMobile } = useMediaRules();

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
            <Calendar />
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
