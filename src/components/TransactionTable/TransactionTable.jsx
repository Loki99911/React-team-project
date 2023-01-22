import { useDispatch } from 'react-redux';
import s from './TransactionTable.module.css';
import { removeTransaction } from 'redux/Transaction/transactionOperations';
import { PropTypes } from 'prop-types';
import DeleteButton from 'components/Buttons/ButtonDelete/ButtonDelete';
import { Translator } from 'components/Translator/Translator';
export const TransactionTable = ({ tablePage, transactionData }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.TableScroll}>
      <table>
        <thead className={s.Thead}>
          <tr>
            <th>Date</th>
            <th className={s.TDesc}>Description</th>
            <th>Category</th>
            <th>Sum</th>
            <th></th>
          </tr>
        </thead>
      </table>
      <div className={s.TableScrollBody}>
        <table>
          <tbody className={s.Tbody}>
            {transactionData?.map(item => (
              <tr className={s.Tr} key={item._id} colSpan="4">
                <td className={s.Td}> {item.date}</td>
                <td className={s.TDesc}>{item.description}</td>
                <td className={s.Td}>{Translator(item.category)}</td>
                {tablePage === '/main/expenses' ||
                tablePage === '/expenses' ||
                tablePage === '/Main/expenses' ? (
                  <td className={s.ExpensesSum}>{`- ${item.amount.toFixed(
                    2
                  )} UAH.`}</td>
                ) : (
                  <td className={s.IncomeSum}>{`${item.amount.toFixed(
                    2
                  )} UAH.`}</td>
                )}
                <td>
                  <DeleteButton
                    onClick={() => dispatch(removeTransaction(item._id))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TransactionTable.propTypes = {
  tablePage: PropTypes.string,
  transactionData: PropTypes.arrayOf(PropTypes.object),
};
