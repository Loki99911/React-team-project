import {
  StyledHomePage,
  Wrap,
  Link,
  ExspensesIncLink,
  LinkBox,
} from './Main.styled';
import Background from '../../components/Background/Background';
import BalanceForm from '../../components/BalanceForm/BalanceForm';
import { ReactComponent as IconReports } from '../../images/reports.svg';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Main() {
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

        <LinkBox>
          <ExspensesIncLink to="expenses">Expenses</ExspensesIncLink>
          <ExspensesIncLink to="income">Income</ExspensesIncLink>
        </LinkBox>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </StyledHomePage>
    </>
  );
}
