import styled from "styled-components";

export const ButtonBox = styled.div`
margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  background-color: transparent;
  border: transparent;
  padding: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 250ms linear;
  :hover,
  :focus {
    color: #ff751d;
    cursor: pointer;
    
  }
`