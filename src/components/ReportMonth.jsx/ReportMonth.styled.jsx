import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const LinkText = styled.p`
  display: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: var(--balance-text-color);

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const PeriodText = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: var(--balance-text-color);
`;

export const ReportWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 32px;
  }
`;

export const MonthText = styled.p`
  width: 130px;
  margin: 0;
  padding: 0px 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;
