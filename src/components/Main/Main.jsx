import Button from 'components/common/button/button';
import { SummaryTable } from 'components/SummaryTable/SummaryTable';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { useState, useEffect } from 'react';
import s from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenseStats, addExpense } from 'redux/Transaction/transactionOperations';
import { NavLink, useLocation } from 'react-router-dom';
import { addIncome, getIncomeStats } from 'redux/Transaction/transactionOperations';
import { Calendar } from 'components/Calendar/Calendar';
import { Calculator } from 'components/Calculator/Calculator';
import { Loader } from 'components/Loader/Loader';

export const Main = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState('');
  const [list, setList] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [emptyInput, setEmptyInput] = useState(false);

  const loadingExpense = useSelector(state => state.expense.isLoading);
  const loadingIncome = useSelector(state => state.income.isLoading);
  let loading = loadingExpense === true || loadingIncome === true;

  const prodExp = useSelector(({ expense }) => expense.categories);
  const prodInc = useSelector(({ income }) => income.categories);
  const expensesTransactionData = useSelector(
    ({ expense }) => expense.expenses
  );
  const incomesTransactionData = useSelector(({ income }) => income.incomes);
  const expensesSummaryData = useSelector(({ expense }) => expense.monthsStats);
  const incomesSummaryData = useSelector(({ income }) => income.monthsStats);
  const balance = useSelector(({ balance }) => balance);
  const dispatch = useDispatch();
  const pageLocation = useLocation().pathname;

  useEffect(() => {
    if (pageLocation === '/expenses') {
      dispatch(getExpenseStats());
    }
    if (pageLocation === '/income') {
      dispatch(getIncomeStats());
    }
  }, [dispatch, balance, pageLocation]);

  let products;
  let transactionData;
  let summaryData;

  if (pageLocation === '/expenses') {
    products = prodExp;
    transactionData = expensesTransactionData;
    summaryData = expensesSummaryData;
  }
  if (pageLocation === '/income') {
    products = prodInc;
    transactionData = incomesTransactionData;
    summaryData = incomesSummaryData;
  }

  const handleChangeForm = evt => {
    const { value, name } = evt.target;
    switch (name) {
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'sum':
        setSum(value);
        break;
      default:
        return;
    }
  };

  const handleResetForm = () => {
    setEmptyInput(false);
    setDescription('');
    setCategory('');
    setSum('');
    setStartDate(new Date());
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();

    if (!description) {
      setEmptyInput(true);
      return;
    }
    if (!category) {
      setEmptyInput(true);
      return;
    }
    if (!sum) {
      setEmptyInput(true);
      return;
    }

    const items = {
      description: description,
      amount: Number(sum),
      date: startDate.toISOString().slice(0, 10),
      category: category,
    };

    if (pageLocation === '/expenses') {
      dispatch(addExpense(items));
    }
    if (pageLocation === '/income') {
      dispatch(addIncome(items));
    }

    handleResetForm();
  };

  const handleIsListTogle = () => {
    setList(!list);
  };

  const handleCloseByDrope = evt => {
    if (evt.target === evt.currentTarget) {
      setList(!list);
    }
  };

  return (
    <div className={s.container}>
      <nav>
        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            s.btn + (isActive ? ' ' + s.btnAccent : '')
          }
        >
          EXPENSES
        </NavLink>
        <NavLink
          to="/income"
          className={({ isActive }) =>
            s.btn + (isActive ? ' ' + s.btnAccent : '')
          }
        >
          INCOME
        </NavLink>
      </nav>

      <div className={s.contentContainer}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className={s.formContainer}>
              <div className={s.calendar}>
                <Calendar startDate={startDate} setStartDate={setStartDate} />
              </div>
              <form className={s.form} onSubmit={handleSubmitForm}>
                <input
                  className={s.inputDescription}
                  placeholder="Product description"
                  autoComplete="off"
                  type="text"
                  name="description"
                  value={description}
                  onChange={handleChangeForm}
                />

                <div className={s.inputCategoryContainer}>
                  <button
                    className={s.inputCategory}
                    onClick={handleIsListTogle}
                    type="button"
                  >
                    {category ? (
                      <p style={{ color: '#52555F' }}>{category}</p>
                    ) : (
                      <p style={{ color: '#c7ccdc' }}>Product category</p>
                    )}
                    <span className={s.arrow}>&#129171;</span>
                  </button>
                  {list && (
                    <>
                      <div
                        className={s.overlay}
                        onClick={handleCloseByDrope}
                      ></div>
                      <ul className={s.listCategory}>
                        {products.map((el, ind) => (
                          <li
                            value={el}
                            key={ind}
                            className={s.itemCategory}
                            onClick={() => {
                              setCategory(el);
                              handleIsListTogle();
                            }}
                          >
                            {el}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div className={s.errContainer}>
                  <p className={s.errDescriptionMsg}>
                    {!description && emptyInput && 'Enter description!'}
                  </p>
                  <p className={s.errCategoryMsg}>
                    {!category && emptyInput && 'Select category!'}
                  </p>
                  <p className={s.errSummMsg}>
                    {!sum && emptyInput && 'Enter sum!'}
                  </p>
                </div>
                <div className={s.inputSummContainer}>
                  <input
                    className={s.inputSumm}
                    placeholder="0,00"
                    type="number"
                    name="sum"
                    value={sum}
                    onChange={handleChangeForm}
                  />
                  <Calculator />
                </div>
              </form>
              <div className={s.buttonContainer}>
                <Button
                  text={'INPUT'}
                  type={'submit'}
                  onClick={handleSubmitForm}
                />
                <Button
                  text={'CLEAR'}
                  type={'button'}
                  onClick={handleResetForm}
                />
              </div>
            </div>

            <div className={s.tableContainer}>
              <div className={s.prods}>
                <TransactionTable
                  transactionData={transactionData}
                  tablePage={pageLocation}
                />
              </div>
              <div className={s.sumary}>
                <SummaryTable summaryData={summaryData} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
