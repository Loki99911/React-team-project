import styled from 'styled-components';

export const BalanceFormStyled = styled.form`
  padding: 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-left: 80px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: baseline;
    margin: 0;
  }
`;

export const BalanceFormLabel = styled.label`
  color: rgba(82, 85, 95, 0.7);
  margin-bottom: 8px;
  font-size: 12px;
  line-height: calc(14 / 12);
  font-weight: 500;
  letter-spacing: 0.02em;
  text-align: center;
`;

export const BalanceFormInput = styled.input`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  width: 183px;
  padding: 15px 30px;
  color: #52555f;
  border: 2px solid white;
  text-align: center;
  border-radius: 16px;
  outline: none;
  background-color: #f5f6fb;

  transition: background-color 250s linear;

  :focus {
    background-color: #fff;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    transition: background-color 250s linear;
  }

  &::placeholder {
    color: #000;
    letter-spacing: 0.02em;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    padding: 12px 20px;
    margin-right: 15px;
  }
`;

export const BalanceFormBtn = styled.button`
  display: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);
  text-transform: uppercase;
  border: 2px solid white;
  outline: none;
  background-color: #f5f6fb;

  @media screen and (min-width: 768px) {
    width: 125px;
    padding: 12px 6px;
    border-radius: 16px;
    text-align: center;
    border-left: 2px solid white;
  }

  @media screen and (min-width: 1280px) {
    display: inline-block;
  }
`;
