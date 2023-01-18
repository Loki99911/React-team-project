import { ReportWrap, LinkText, MonthText, PeriodText } from "./ReportMonth.styled"
import { ButtonsNextPrev } from "components/ButtonsNextPrev/ButtonsNextPrev"
import { useEffect, useState } from "react";
import { getSpecificPeriodTrans } from "redux/Transaction/transactionOperations";
import { useDispatch } from "react-redux";

const dateNow = new Date();

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getMonth = () => dateNow.getMonth();
export const getYear = () => dateNow.getFullYear();

export default function ReportMonth() {

const dispatch = useDispatch()    

const [monthNumber, setMonthNumber] = useState(0);
const [month, setMonth] = useState('');
const [year, setYear] = useState('');

    useEffect(() => {
setMonthNumber(getMonth());
setMonth(monthNames[getMonth()]);
setYear(getYear());
    }, []);
    
 useEffect(() => {
    setMonth(monthNames[monthNumber]);
    let monthString = '';

    if (monthNumber + 1 < 10) {
      monthString = '0' + (monthNumber + 1);
    } else {
      monthString = monthNumber + 1;
    }
     const query = `${year}-${monthString}`;
     dispatch(getSpecificPeriodTrans(query))
    //  console.log(query)
    // if (query !== '-01') dispatch(getReports(query));
    // dispatch(reportsQueryAction(`${year}-${monthString}`));
 }, [monthNumber, year]);
    
    //[monthNumber, year, dispatch]);

const handlerClick = name => {
    switch (name) {
      case 'decrement':
        // dispatch(filteredDataAction([]));
        setMonthNumber(monthNumber - 1);
        if (monthNumber === 0) {
          setMonthNumber(11);
          setYear(year - 1);
        }
        break;
      case 'increment':
        // dispatch(filteredDataAction([]));
        setMonthNumber(monthNumber + 1);
        if (monthNumber === 11) {
          setMonthNumber(0);
          setYear(year + 1);
        }
        break;
      default:
        return;
    }
  };


    return (
        <>
            <ReportWrap>
                <LinkText>Main Paige</LinkText>
            </ReportWrap>
            <ReportWrap>
                <p>Balance:</p>
            </ReportWrap>
            <ReportWrap>
                <PeriodText>Current Period:</PeriodText>
                <ButtonsNextPrev onButtonClick={handlerClick}>
                    <MonthText>
                    {month} {year}
                    </MonthText>
                </ButtonsNextPrev>
            </ReportWrap>
        </>
    )
}