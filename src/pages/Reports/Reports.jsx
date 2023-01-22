import Background from '../../components/Background/Background';
import { StyledReportsPage, Wrap, Link } from './Reports.styled';
import { ReactComponent as ToMainIcon } from '../../images/backSpace.svg';
import ReportMonth from 'components/ReportMonth.jsx/ReportMonth';
import ReportsData from 'components/ReportsData/ReportsData';

export default function Reports() {
  return (
    <>
      <Background />
      <StyledReportsPage>
        <Wrap>
          <Link to="/Main">
            <ToMainIcon className="backToMain" />
          </Link>
          <ReportMonth />
        </Wrap>
      <ReportsData/>
      </StyledReportsPage></>
  )
}
