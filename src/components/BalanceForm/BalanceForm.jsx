import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  BalanceFormStyled,
  BalanceFormLabel,
  BalanceFormInput,
  BalanceFormBtn,
} from './BalanceForm.styled';
import NotifyBalance from '../NotifyBalance/NotifyBalance';
import { InfoModal } from 'components/InfoModal/InfoModal';
import { handleUserBalance } from '../../redux/Auth/authOperations';
import { getBalance } from '../../redux/Transaction/transactionSelectors';
import CurrencyInput from 'react-currency-input-field';



export default function BalanceForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const stateBalance = useSelector(getBalance);
  const [balance, setBalance] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    setBalance(String(stateBalance));
  }, [stateBalance]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = ({target:{value}}) => {
  
    const numText = value.split('').slice(0, value.indexOf('.')).join('');
    setBalance(numText);
  };

  // Handle update users balance
  const handleClick = () => {
    dispatch(handleUserBalance(Number(balance)));
    setBalance('');
  };
  // Open modal window
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  // Close modal window
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <BalanceFormStyled onSubmit={handleSubmit}>
        <BalanceFormLabel>Balance:</BalanceFormLabel>
        <div>
          {' '}
          <BalanceFormInput
            type="text"
            name="balance"
            title="Please, enter your balance"
            placeholder="00.00 UAH"
            pattern="[0-9, .UAH]*"
            required
            onChange={handleChange}
            // placeholder={`${balance}.00 UAH`}
            value={`${balance}.00 UAH`} //как сделать с .UAH
          />
          {/* <CurrencyInput
            className='input-st'
            id="input-example"
            name="balance"
            placeholder="Please, enter your balance"
            suffix=".00 UAH"
            value={balance}
            decimalsLimit={2}
            decimalSeparator={'.'}
            onValueChange={value => {
              const numText = value
                .split('')
                .slice(0, value.indexOf('.'))
                .join('');
              setBalance(numText);
            }}
          /> */}
          <BalanceFormBtn type="submit" onClick={handleModalOpen}>
            Confirm
          </BalanceFormBtn>
        </div>
        {!stateBalance && <NotifyBalance />}
      </BalanceFormStyled>
      {modalOpen && (
        <InfoModal closeModal={handleModalClose} dispatch={handleClick}>
          Are you sure?
        </InfoModal>
      )}
    </>
  );
}
