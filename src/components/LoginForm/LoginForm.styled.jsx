import styled from 'styled-components';

export const FormLayout = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 425px; */
  padding: 40px 20px;
  margin-top: 50px;
  /* height: 496px; */

  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  @media screen and (min-width: 768px) {
    width: 425px;
    /* height: 550px; */
    padding: 55px 85px;
    margin-top: 80px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-left: 160px;
  }
`;
export const FormText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
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
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 19px;
  margin: 0;
  background-color: #f6f7fb;
  border: none;
  border-radius: 26px;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #ff751d;
  }
`;
