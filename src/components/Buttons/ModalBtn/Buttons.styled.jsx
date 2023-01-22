import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledOrangeButton = styled.button`
  padding: 12px 0px;
  width: 125px;
  height: 44px;
  border: none;
  background-color: #ff751d;
  border-radius: 16px;
  color: #fff;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  font-size: 12px;
  line-height: 1.17;
  cursor: pointer;
  transition: transform 250ms linear;
  :hover {
    transform: scale(1.1);
  }
`;

export const StyledWhiteButton = styled.button`
  padding: 12px 34px;
  width: 125px;
  height: 44px;
  border: 2px solid #f5f6fb;
  background-color: #fff;
  border-radius: 16px;
  color: #52555f;
  font-size: 12px;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  line-height: 1.17;
  cursor: pointer;
  transition: transform 250ms linear;
  :hover {
    transform: scale(1.1);
  }
`;

export const ButtonBack = styled(Link)`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin: 14px 0px 14px 16px;
`;
