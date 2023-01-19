import { useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { getIncomesReportData, getExpencesReportData } from "redux/Transaction/transactionSelectors";
import reportsIcon from '../../images/reportsFiles/reports.svg';
import { List, Item, ItemIncome, ItemSvg } from './ReportCategories.styled';
import {ReactComponent as BgcIcon} from '../../images/reportsFiles/bgcForSvg.svg';
import { ReactComponent as OrangeBgc } from '../../images/orangeBgc.svg';

const categoryToEng = name => {
  switch (name.trim()) {
    case 'Продукты':
      return 'Products';
    case 'Алкоголь':
      return 'ЗСУ';
    case 'Развлечения':
      return 'Entertainment';
    case 'Здоровье':
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Всё для дома':
      return 'Housing';
    case 'Техника':
      return 'Technics';
    case 'Коммуналка и связь':
      return 'Communal and communication';
    case 'Спорт и хобби':
      return 'Sport and hobby';
    case 'Образование':
      return 'Education';
    case 'Прочее':
      return 'Other';
    case 'З/П':
      return 'Salary';
    case 'Доп. доход':
      return 'Additional income';
    default:
      break;
  }
};

export default function ReportCategories({ onChange }) {
  
  const [active, setActive] = useState('');
  const [data, setData] = useState({});
 const incomesData = useSelector(getIncomesReportData)
  const expensesData = useSelector(getExpencesReportData)

  const valueArr = [];
  
 useEffect(() => {
   if (expensesData.total !== null && incomesData.total !== null) {
        if (onChange === 'expenses') {
      setData(expensesData.incomesData ?? {});
      setActive('');
    } else {
      setData(incomesData.incomesData ?? {});
      setActive('');
    }
  }
  }, [onChange, expensesData, incomesData])

const clickEventHandler = event => {
  setActive(event.currentTarget.id);
  // const filteredValueArr = valueArr.filter(
  //   item => item[0].replace(/\s+/g, '') === event.currentTarget.id
  // );    ------------------------------------filteredValueArr Не тспользуется нигде!!!!
  // dispatch(filteredDataAction(filteredValueArr));
};
  
  const entries = Object.entries(data) ?? [];
  return (
      <div>
      {data.total === null? <p>wait</p>:<List className={onChange === 'income' ? 'incomeList' : ''}>
          {entries.map(item => {
            const iconName = item[0].replace(/ /g,'');
          valueArr.push(item);
          if (onChange === 'expenses') {
            return (
              <Item
                key={iconName}
                id={iconName}
                onClick={clickEventHandler}
                className={iconName === active ? 'active' : ''}
              >
                <p>{item[1].total}.00</p>
                <ItemSvg width="56" height="56">
                  {iconName === active ? <OrangeBgc
                    width="59"
                    height="46"
                    viewBox="0 0 54 47"
                    background-position="center"
                    className={iconName === active ? 'active' : ''}
                  /> : <BgcIcon
                    width="59"
                    height="46"
                    viewBox="0 0 54 47"
                    background-position="center"
                    className={iconName === active ? 'active' : ''}
                  />}
                  
                  <use href={`${reportsIcon}#${iconName}`}></use>
                </ItemSvg>
                <p>{categoryToEng(item[0])}</p>
              </Item>
            );
          } else if (onChange === 'income') {
            return (
              <ItemIncome
                key={iconName}
                id={iconName}
                onClick={clickEventHandler}
                className={iconName === active ? 'active' : ''}
              >
                <p>{item[1].total}.00</p>
                <ItemSvg
                  width="56"
                  height="56"
                  className={iconName === active ? 'active' : ''}
                >
                  {iconName === active ? <OrangeBgc
                    width="59"
                    height="46"
                    viewBox="0 0 54 47"
                    background-position="center"
                    className={iconName === active ? 'active' : ''}
                  /> : <BgcIcon
                    width="59"
                    height="46"
                    viewBox="0 0 54 47"
                    background-position="center"
                    className={iconName === active ? 'active' : ''}
                  />}
                  <use href={`${reportsIcon}#${iconName}`}></use>
                </ItemSvg>
                <p>{categoryToEng(item[0])}</p>
              </ItemIncome>
            );
          }
          return <></>;
        })}
      </List>}
    </div>
    )
}


// const categories = [
//   "Продукты",
//   "Алкоголь",
//   "Развлечения",
//   "Здоровье",
//   "Транспорт",
//   "Всё для дома",
//   "Техника",
//   "Коммуналка и связь",
//   "Спорт и хобби",
//   "Образование",
//   "Прочее"
// ]

// const TrimCategories = categories.map(category => category.replace(/ /g,''))
// console.log(TrimCategories)
