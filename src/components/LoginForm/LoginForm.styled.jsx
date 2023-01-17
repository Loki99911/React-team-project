import styled from 'styled-components';

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 425px;
  height: 550px;
  padding: 55px 85px;
  border-radius: 30px;
  border: 1px solid red;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LoginLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
`;

export const LoginInput = styled.input`
  background-color: #f6f7fb;
  border: none;
  width: 100%;
  height: 52px;
  border-radius: 30px;
  margin-bottom: 40px;
  &:nth-child(2) {
    margin-bottom: 32px;
  }
`;
export const LoginBtnBlock = styled.div`
display: flex;
  gap: 15px;
  
`;

export const LoginBtn = styled.button`
  width: 100%;
  padding: 0;
  margin: 0;
  color: #52555f;
  background-color: #f5f6fb;
  height: 44px;
  border: none;
  border-radius: 16px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: #ffffff;
    background-color: #ff751d;
  }
`;

export const GoogleBtn = styled.button`
  width: 120px;
  height: 40px;
  padding: 0;
  margin: 0;
  background-color: #f6f7fb;
  border: none;
  border-radius: 26px;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #ff751d;
  }
`;