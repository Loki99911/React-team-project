import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  BalanceFormStyled,
  BalanceFormLabel,
  BalanceFormInput,
  BalanceFormBtn,
} from './ReportBalanceForm.styled';
import NotifyBalance from '../NotifyBalance/NotifyBalance';
import { InfoModal } from 'components/InfoModal/InfoModal';
import { handleUserBalance } from '../../redux/Auth/authOperations';
import { getBalance } from '../../redux/Transaction/transactionSelectors';

export default function ReportBalanceForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const stateBalance = useSelector(getBalance);
  const [balance, setBalance] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setBalance(String(stateBalance));
  }, [stateBalance]);

  const handleSubmit = e => {
    e.preventDefault();
    handleModalOpen()
  };

  const handleChange = ({ target: { value } }) => {
    const numText = value.split('').slice(0, value.indexOf('.')).join('');
    setBalance(numText);
  };

  const handleClick = () => {
    if (Number(balance) === 0) {
      setBalance(prev => String(stateBalance));
      return;
    }
    dispatch(handleUserBalance(Number(balance)));
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };
 
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
            disabled
            value={`${balance}.00 UAH`}
          />
          <BalanceFormBtn disabled type="submit">
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
