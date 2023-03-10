import { useState } from 'react';
import ReportStats from 'components/ReportStats/ReportStats';
import ReportCategories from 'components/ReportCategories/ReportCategories';
import { ButtonsNextPrev } from 'components/Buttons/ButtonsNextPrev/ButtonsNextPrev';
import { Nav, NavText, Box } from './ReportsData.styled';
import ReportGraphic from 'components/ReportGraphic/ReportGraphic';

export default function ReportsData() {
  const [arrow, setArrow] = useState([]);

  function ObjectConvertor(obj) {
    const entries = Object.entries(obj).slice(1);
    const newArray = entries.map(entry => {
      const obj = { name: entry[0], uv: entry[1] };
      return obj;
    });
    return newArray;
  }

  function convertArrow(incomeArrow) {

    if (incomeArrow.length === 0) {
      return setArrow([]);
    } else {
      return setArrow(incomeArrow);
    }
  }

  function getArrow(incomeArrow) {
    if (incomeArrow.length === 0) {
      return setArrow([]);
    } else {
      const newArray = incomeArrow[1];
      const ObjArray = ObjectConvertor(newArray);
      return setArrow(ObjArray);
    }
  }

  const [operation, setOperation] = useState('expenses');

  const handleClick = () => {
    if (operation === 'expenses') {
      setOperation('income');
      return;
    }
    setOperation('expenses');
  };

  return (
    <>
      <ReportStats />
      <Box>
        <Nav>
          <ButtonsNextPrev onButtonClick={handleClick}>
            <NavText>{operation}</NavText>
          </ButtonsNextPrev>
        </Nav>
        <ReportCategories
          onChange={operation}
          onClick={getArrow}
          convert={convertArrow}
        ></ReportCategories>
      </Box>
      <ReportGraphic state={arrow}></ReportGraphic>
    </>
  );
}
