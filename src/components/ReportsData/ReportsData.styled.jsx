import styled from 'styled-components';

export const Box = styled.div`
  background-color: #fff;
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    margin-top: 32px;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
  
  @media screen and (min-width: 1280px) {
    padding: 20px 205px;
  }
`;

export const Nav = styled.div`
  margin: 0 auto;
  align-items: center;
  display: flex;
  width: 130px;
`;

export const NavText = styled.p`
  width: 120px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
`;
