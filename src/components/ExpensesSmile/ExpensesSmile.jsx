import { StyledIncomeSmile, StyledIncomeSmileText } from './ExpensesSmile.styled';
import logo from '../../images/nothing2.jfif';

export const ExpensesSmile = () => {
  return (
    <StyledIncomeSmile>
      <img src={logo} alt="logo" width={200} />
      <StyledIncomeSmileText>
        Looks like you haven't added any transactions yet. <br /> Get started
        and add your first expense today! :)
      </StyledIncomeSmileText>
    </StyledIncomeSmile>
  );
};


