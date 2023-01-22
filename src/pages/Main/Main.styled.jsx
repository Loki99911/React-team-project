import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bgDesk from '../../images/BgDesktop_1.png';
import bgDesk2 from '../../images/BgDesktop_2.png';
import bgTabl from '../../images/BgTablet_1.png';
import bgTabl2 from '../../images/BgTablet_2.png';

export const StyledHomePage = styled.div`
  padding: 46px 0px 0px 0px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    padding: 40px 32px 60px 32px;
    background-image: url(${bgTabl});
    background-position: bottom 60px right 88px;
    background-repeat: no-repeat;
    background-size: 25%;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgTabl2});
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 91px 83px 91px;
    background-image: url(${bgDesk});
    background-position: bottom;
    background-size: contain;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgDesk2});
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }

`;


export const Link = styled(NavLink)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.04em;
  text-decoration: none;
  margin-bottom: 40px;
  fill: #52555f;
  color: rgba(82, 85, 95, 0.7);

  transition: color 250ms linear;

  :hover,
  :focus {
    color: #ff751d;
  }
  :hover .reportsIcon,
  :focus .reportsIcon {
    fill: #ff751d;
  }
  .reportsIcon {
    margin-left: 20px;
    width: 14px;
    height: 14px;
    fill: #52555f;
    transition: fill 250ms linear;
  }

  @media screen and (min-width: 768px) {
    text-align: right;
    margin-bottom: 0;
  }
`;

export const ExspensesIncLink = styled(NavLink)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;
  background: #f5f6fb;
  color: #000000;
  width: 159px;
  height: 53px;

  transition: color 250ms linear, background-color 250ms linear;

  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff751d;
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 40px;
    background: #fafbfd;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    &.active {
      color: #ff751d;
      background-color: #fefefe;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
      color: #ff751d;
      background: #fafbfd;
    }
  }
`;

export const LinkBox = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    gap: 2px;
    display: flex;
    margin-top: auto;
  }
  
  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 8px;
  }
`;
