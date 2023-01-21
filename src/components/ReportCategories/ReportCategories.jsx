import { useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { getIncomesReportData, getExpencesReportData } from "redux/Transaction/transactionSelectors";
import reportsIcon from '../../images/reportsFiles/reports.svg';
import { List, Item, ItemIncome, ItemSvg, Text, TextPrice } from './ReportCategories.styled';
import {ReactComponent as BgcIcon} from '../../images/reportsFiles/bgcForSvg.svg';
import { ReactComponent as OrangeBgc } from '../../images/orangeBgc.svg';

import { Translator } from "components/Translator/Translator";

export default function ReportCategories({ onChange, onClick, convert }) {
  
  const [active, setActive] = useState('');
  const [data, setData] = useState({});
 const incomesData = useSelector(getIncomesReportData)
  const expensesData = useSelector(getExpencesReportData)

  const valueArr = [];
  
  function ObjectConvertor (obj) {
    const entries = Object.entries(obj)
  const newArray = entries.map(entry => {
    const obj = {name: Translator(entry[0]), uv: entry[1].total}
    return obj
  })
  return newArray}

 useEffect(() => {
   if (expensesData.total !== null && incomesData.total !== null) {
     if (onChange === 'expenses') {  
       convert(ObjectConvertor(expensesData.incomesData))
      setData(expensesData.incomesData ?? {});
      setActive('');
     } else {
       convert(ObjectConvertor(incomesData.incomesData))
      setData(incomesData.incomesData ?? {});
      setActive('');
     }
   }
   // eslint-disable-next-line 
  }, [onChange, expensesData, incomesData])

const clickEventHandler = event => {
  setActive(event.currentTarget.id);
    const filteredValueArr = valueArr.filter(
      item => item[0].replace(/\s+/g, '') === event.currentTarget.id
  );
  onClick(filteredValueArr[0])
  };
  
  const entries = Object.entries(data) ?? [];
  return (
      <div>
      {data.total === null? <Text>wait</Text>:<List className={onChange === 'income' ? 'incomeList' : ''}>
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
                <TextPrice>{item[1].total}.00</TextPrice>
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
                <Text>{Translator(item[0])}</Text>
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
                <TextPrice>{item[1].total}.00</TextPrice>
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
                <Text>{Translator(item[0])}</Text>
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
