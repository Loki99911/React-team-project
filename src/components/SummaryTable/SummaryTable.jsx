import s from './SummaryTable.module.css';
import { PropTypes } from 'prop-types';

export const SummaryTable = ({ summaryData = {} }) => {
  const monthStats = Object.entries(summaryData).filter(
    elem => elem[1] !== 'N/A'
  );

  return (
    <div className={s.Table}>
      <p className={s.Title}>Summary</p>
      <ul className={s.List}>
        {monthStats?.map((elem, index) => {
          return (
            <li key={index} className={s.Item}>
              <span className={s.Mouth}>{elem[0]}</span>
              <span className={s.Sum}>{elem[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SummaryTable.propTypes = {
  transactionData: PropTypes.arrayOf(PropTypes.object),
};
