import DeleteButton from 'components/common/button-delete/button-delete';
import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

export const TransactionItem = ({
  transactionData,
  tablePage,
  hendelDelete,
}) => {
  const { date, description, category, amount, _id } = transactionData;

  return (
    <ul className={s.Line} id={_id}>
      <li className={s.Date}>{date}</li>
      <li className={s.Description}>{description}</li>
      <li className={s.Category}>{category}</li>
      {tablePage === '/expenses' ? (
        <li className={s.ExpensesSum}>{`- ${amount} грн.`}</li>
      ) : (
        <li className={s.IncomeSum}>{`${amount} грн.`}</li>
      )}
      <li className={s.Delete}>
        <DeleteButton onClick={() => hendelDelete(_id)} />
      </li>
    </ul>
  );
};

TransactionItem.propTypes = {
  tablePage: PropTypes.string,
  hendelDelete: PropTypes.func,
  transactionData: PropTypes.shape({
    data: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    sum: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }),
};
