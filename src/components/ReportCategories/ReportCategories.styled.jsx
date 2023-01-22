import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0%;
  padding: 0;

  &.incomeList {
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const Item = styled.li`
  flex-grow: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100% - 20px) / 3);
  margin: 0%;
  padding: 10px 0;
  gap: 5px;
  border-bottom: 1px solid black;

  &.active {
    fill: #ff751d;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    fill: #ff751d;
  }

  @media screen and (min-width: 768px) {
    border: none;
    width: calc((100% - 64px) / 6);
  }

  &.income {
    max-width: 90px;
    flex-grow: 0;
  }
`;

export const ItemIncome = styled.li`
  flex-grow: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100% - 20px) / 3);
  margin: 0%;
  padding: 10px 0;
  gap: 5px;
  border-bottom: 1px solid black;

  &p {
    margin-bottom: 0;
  }

  &.active {
    fill: #ff751d;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    fill: #ff751d;
  }

  @media screen and (min-width: 768px) {
    border: none;
    width: calc((100% - 64px) / 6);
  }

  max-width: 90px;
  flex-grow: 0;
`;

export const ItemSvg = styled.svg`
  position: relative;
`;

export const Text = styled.p`
  margin-bottom: 0;
  height: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #52555f;
`;

export const TextPrice = styled.p`
  padding-left: 2px;
  padding-bottom: 2px;
  margin-bottom: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
`;
