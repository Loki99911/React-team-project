import styled from "styled-components";

export const LinkText = styled.p`
display: none;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.04em;

color: rgba(82, 85, 95, 0.7);
@media screen and (min-width: 768px) {
  display: block;
  }
`

export const PeriodText = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.04em;

color: rgba(82, 85, 95, 0.7);
`

export const ReportWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 32px;
`

export const MonthText = styled.p`
padding: 0px 5px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.02em;
text-transform: uppercase;
`
