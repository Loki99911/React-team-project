import {
  BalanceFormStyled,
  BalanceFormLabel,
  BalanceFormInput,
  BalanceFormBtn,
} from './BalanceForm.styled';
import { useSelector } from 'react-redux';
import NotifyBalance from '../NotifyBalance/NotifyBalance';
import { useState, useEffect } from 'react';
import { InfoModal } from 'components/InfoModal/InfoModal';
import { handleUserBalance } from '../../redux/Auth/authOperations';
import { useDispatch } from 'react-redux';
import { getBalance } from '../../redux/Transaction/transactionSelectors';


export default function BalanceForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const stateBalance = useSelector(getBalance);
  const [balance, setBalance] = useState('');
  const dispatch = useDispatch();

    useEffect(() => {
      setBalance(stateBalance);
      // eslint-disable-next-line
    }, [stateBalance]);

  const handleSubmit = e => {
    e.preventDefault();
   
  };

  const handleChange = ({ target: { value } }) => {
    setBalance(Number(value));
  };
  // Handle update users balance
  const handleClick = () => {
    dispatch(handleUserBalance({ newBalance: balance }));
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
            type="number"
            name="balance"
            title="Please, enter your balance"
            placeholder="00.00 UAH"
            pattern="[0-9, .UAH]*"
            required
            onChange={handleChange}
            value={balance}
          />
          <BalanceFormBtn type="submit" onClick={handleModalOpen}>
            Confirm
          </BalanceFormBtn>
        </div>
        {!stateBalance && <NotifyBalance />}
      </BalanceFormStyled>
      {modalOpen && (
        <InfoModal
        
          closeModal={handleModalClose}
          dispatch={handleClick}
        >
          Are you sure?
        </InfoModal>
      )}
    </>
  );
}
