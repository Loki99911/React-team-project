import { useDispatch } from 'react-redux';
import s from './TransactionTable.module.css';
import { removeTransaction } from 'redux/Transaction/transactionOperations';
import { PropTypes } from 'prop-types';
import DeleteButton from 'components/common/button-delete/button-delete';

export const TransactionTable = ({ tablePage, transactionData }) => {
  const dispatch = useDispatch();
  console.log(tablePage);


  return (


    <table className={s.Table}>
      <thead className={s.Thead}>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sum</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {transactionData?.map(item => (
          <tr key={item._id}>
            <td className={s.Td}>{item.date}</td>
            <td className={s.Description}>{item.description}</td>
            <td className={s.Td}>{item.category}</td>
            {tablePage === '/main/expenses' || tablePage === '/expenses' || tablePage === '/Main/expenses' ? (
              <td className={s.ExpensesSum}>{`- ${item.amount} грн.`}</td>
            ) : (
              <td className={s.IncomeSum}>{`${item.amount} грн.`}</td>
            )}
            <td className={s.Td}>
              <DeleteButton onClick={() => dispatch(removeTransaction(item._id))} />
            </td>
          </tr>
        ))}
      </tbody>
    </table >
  );
};

TransactionTable.propTypes = {
  tablePage: PropTypes.string,
  transactionData: PropTypes.arrayOf(PropTypes.object),
};
