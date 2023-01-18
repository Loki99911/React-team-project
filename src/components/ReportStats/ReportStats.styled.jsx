import styled from "styled-components";

export const StatsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 280px;
height: 85px;
padding: 7px, 0px;
background: #FFFFFF;
box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
border-radius: 20px;
margin-left: auto;
margin-right: auto;
margin-bottom: 32px;
gap: 10px;

 @media screen and (min-width: 768px) {
    width: 704px;
    height:50px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
    gap: 20px;
 }

 @media screen and (min-width: 1280px) {
    width: 100%;
 }

`

export const VerticalLine = styled.div`
    width: 0px;
height: 70px;
background-color: #E0E5EB;
border: 1px solid #E0E5EB;

@media screen and (min-width: 768px) {
    height: 36px;
}
`

export const TextWrap = styled.div`
display: flex;
flex-direction: column;
@media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 15px;
}
`
export const Text = styled.p`
margin: 0;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #52555F;
`

export const TextExpenses = styled.p`
margin: 0;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #e53935;
`

export const TextIncomes = styled.p`
margin: 0;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #407946;
`