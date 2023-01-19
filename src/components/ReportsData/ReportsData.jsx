import { useState } from 'react';

import ReportStats from 'components/ReportStats/ReportStats';
import ReportCategories from 'components/ReportCategories/ReportCategories';
import { ButtonsNextPrev } from 'components/ButtonsNextPrev/ButtonsNextPrev';
import {
  Nav,
  NavText,
  Box,
} from './ReportsData.styled';
import ReportGraphic from 'components/ReportGraphic/ReportGraphic';

export default function ReportsData() {
    
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
        <ReportCategories onChange={operation} ></ReportCategories>
            </Box>
            <ReportGraphic onChange={operation}></ReportGraphic>
        </>
    )
}