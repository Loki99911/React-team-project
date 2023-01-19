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
      <thead>
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
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            {tablePage === '/expenses' ? (
              <td>{`- ${item.amount} грн.`}</td>
            ) : (
              <td>{`${item.amount} грн.`}</td>
            )}
            <td>
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
