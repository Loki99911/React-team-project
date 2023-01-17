import styled from 'styled-components';

export const Header = styled.header`
  height: 56px;
  padding: 0 16px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserIcon = styled.span`
  font-weight: 700;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f5f6fa;
  margin-right: 12px;
`;

export const UserText = styled.p`
  margin: 0;
  padding-right: 40px;
`;

export const LogoutBtn = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;

  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;
  cursor: pointer;
`;
