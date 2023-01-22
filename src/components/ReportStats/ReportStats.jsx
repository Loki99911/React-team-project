import {
  StatsContainer,
  VerticalLine,
  TextWrap,
  Text,
  TextExpenses,
  TextIncomes,
} from './ReportStats.styled';
import { useSelector } from 'react-redux';

export default function ReportStats() {
  const getSectorsData = useSelector(
    state => state.transactions.transactionsByPeriod
  );

  return (
    <StatsContainer>
      <TextWrap>
        <Text>Expenses:</Text>
        <TextExpenses> - {getSectorsData.expenses.total}.00 UAH.</TextExpenses>
      </TextWrap>
      <VerticalLine />
      <TextWrap>
        <Text>Income:</Text>
        <TextIncomes> + {getSectorsData.incomes.total}.00 UAH.</TextIncomes>
      </TextWrap>
    </StatsContainer>
  );
}
