import { useDispatch } from 'react-redux';
import { TransactionItem } from './TransactionItem/TransactionItem';
import s from './TransactionTable.module.css';

import { removeTransaction } from 'redux/Transaction/transactionOperations';
// import { incomeDelete } from 'redux/income/income-operations';


import { PropTypes } from 'prop-types';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

export const TransactionTable = ({ tablePage, transactionData }) => {
  const dispatch = useDispatch();
  const [trID, setTrID] = useState('');
  const [modalActive, setOnSubmitButton] = useState(false);

  const hendelDelete = () => {
    if (tablePage === '/expenses') {
      dispatch(removeTransaction(trID));
    }
    if (tablePage === '/income') {
      dispatch(removeTransaction(trID));
    }
  };

  const modalChange = state => {
    setOnSubmitButton(!modalActive);
    if (state) {
      hendelDelete();
    }
  };

  const hendelOpenModal = id => {
    setTrID(id);
    modalChange();
  };

  return (
    <ul className={s.Table}>
      {modalActive && <Modal title="Are you sure?" modalChange={modalChange} />}
      <li>
        <ul className={s.Thead}>
          <li className={s.Date}>Date</li>
          <li className={s.Description}>Description</li>
          <li className={s.Category}>Category</li>
          <li className={s.Sum}>Sum</li>
          <li className={s.Delete}></li>
        </ul>
      </li>
      <li className={s.Tbody}>
        {transactionData?.map(elem => {
          return (
            <TransactionItem
              key={elem._id}
              transactionData={elem}
              tablePage={tablePage}
              hendelDelete={hendelOpenModal}
            />
          );
        })}
      </li>
    </ul>
  );
};

TransactionTable.propTypes = {
  tablePage: PropTypes.string,
  transactionData: PropTypes.arrayOf(PropTypes.object),
};
