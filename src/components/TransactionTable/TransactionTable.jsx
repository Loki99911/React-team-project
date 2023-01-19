import { useDispatch } from 'react-redux';
import s from './TransactionTable.module.css';
import { getExpencesReportData } from 'redux/Transaction/transactionSelectors'
import { removeTransaction } from 'redux/Transaction/transactionOperations';
import { PropTypes } from 'prop-types';
import DeleteButton from 'components/common/button-delete/button-delete';

export const TransactionTable = ({ tablePage, transactionData }) => {
  const dispatch = useDispatch();
  console.log(transactionData);
  console.log(getExpencesReportData);

  return (
    <table className={s.Table}>
      {/* {modalActive && <Modal title="Are you sure?" modalChange={modalChange} />} */}
      <thead>
        <tr className={s.Thead}>
          <th className={s.Date}>Date</th>
          <th className={s.Description}>Description</th>
          <th className={s.Category}>Category</th>
          <th className={s.Sum}>Sum</th>
          <th className={s.Delete}></th>
        </tr>
      </thead>

      <tbody>
        {transactionData?.map(item => (
          <tr key={item._id}>
            <td className={s.Date}>{item.date}</td>
            <td className={s.Description}>{item.description}</td>
            <td className={s.Category}>{item.category}</td>
            {tablePage === '/expenses' ? (
              <td className={s.ExpensesSum}>{`- ${item.amount} грн.`}</td>
            ) : (
              <td className={s.IncomeSum}>{`${item.amount} грн.`}</td>
            )}
            <td className={s.Delete}>
              <DeleteButton onClick={() => dispatch(removeTransaction(item._id))} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionTable.propTypes = {
  tablePage: PropTypes.string,
  transactionData: PropTypes.arrayOf(PropTypes.object),
};
