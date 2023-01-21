import { Calendar } from 'components/Calendar/Calendar';
import DeleteButton from 'components/common/button-delete/button-delete';
import { Translator } from 'components/Translator/Translator';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmail } from 'redux/Auth/authSelectors';
import { getIncomeStats, getExpenseStats, removeTransaction } from 'redux/Transaction/transactionOperations';
import { getExpencesTransactions, getIncomesTransactions } from 'redux/Transaction/transactionSelectors';
import s from './mobileTransactionList.module.css';

const MobileTransactionList = () => {
  const ExpensesTransactions = useSelector(getExpencesTransactions);
  const IncomesTransactions = useSelector(getIncomesTransactions);

  const minusExpensesAmount = ExpensesTransactions.map(el => {
    return { ...el, amount: Number(`-${el.amount}`) };
  });

  const allTransactions = [...IncomesTransactions, ...minusExpensesAmount];
  const sortAllTransactions = [...allTransactions].slice().sort((a, b) => new Date(a.date) - new Date(b.date));


  const dispatch = useDispatch();
  const email = useSelector(getEmail);

  useEffect(() => {
    dispatch(getExpenseStats());
    dispatch(getIncomeStats());
  }, [dispatch, email]);

  return (
    <>
      {/* <div className={s.calendar}>
        <Calendar startDate={startDate} setStartDate={setStartDate} />
      </div> */}



      <ul className={s.listmob}>
        {sortAllTransactions?.map(item => {
          return (
            <li key={item._id} className={s.itemLi}>
              <div className={s.infoText}>
                <p className={s.title}>{item.description}</p>
                <div className={s.smallinfoText}>
                  <p className={s.date}>
                    {item.date.split('-').reverse().join('.')}
                  </p>
                  <p className={s.category}>{Translator(item.category)}</p>
                </div>
              </div>
              <p className={item.amount < 0 ? s.expensesText : s.incomesText}>
                {`${item.amount.toFixed(2)} UAH.`}
              </p>
              <DeleteButton onClick={() => dispatch(removeTransaction(item._id))} />
            </li>
          );
        })}
      </ul></>
  );
};
export default MobileTransactionList;
