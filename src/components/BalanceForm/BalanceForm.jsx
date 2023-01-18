import {
  BalanceFormStyled,
  BalanceFormLabel,
  BalanceFormInput,
  BalanceFormBtn,
} from './BalanceForm.styled';
import { useSelector} from 'react-redux';
import NotifyBalance from '../NotifyBalance/NotifyBalance';

export default function BalanceForm() {

  const stateBalance = useSelector(state => state.transactions.newBalance);
  
  return (
    <>
      <BalanceFormStyled>
        <BalanceFormLabel>Balance:</BalanceFormLabel>
        <div>
          {' '}
          <BalanceFormInput
            type="number"
            name="balance"
            title="Please, enter your balance"
            placeholder="00.00 UAH"
            pattern="[0-9, .UAH]*"
            required
          />
          <BalanceFormBtn type="submit">Confirm</BalanceFormBtn>
        </div>
        {!stateBalance && <NotifyBalance />}
      </BalanceFormStyled>
    </>
  );
}
