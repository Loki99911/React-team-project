import { StyledIncomeSmile, StyledIncomeSmileText } from './IncomeSmile.styled';
import logo from '../../images/Sad.png';

export const IncomeSmile = () => {
    return (
      <StyledIncomeSmile>
        <img src={logo} alt="logo" width={200} />
        <StyledIncomeSmileText>
          Looks like you haven't added any transactions yet.  <br/> Get started and add
          your first income today! :)
        </StyledIncomeSmileText>
      </StyledIncomeSmile>
    );
};