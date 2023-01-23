import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bgDesk from '../../images/BgDesktop_1.png';
import bgDesk2 from '../../images/BgDesktop_2.png';
import bgTabl from '../../images/BgTablet_1.png';
import bgTabl2 from '../../images/BgTablet_2.png';

export const StyledReportsPage = styled.div`
  position: relative;
  text-align: center;
  padding: 24px 0px 0px 0px;
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
  align-items: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    padding-left: 29px;
    padding-top: 4px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 40px;
  }
`;

export const Link = styled(NavLink)`
  position: absolute;
  width: 18px;
  height: 12px;
  top: 22px;
  left: 23px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  text-align: center;
  letter-spacing: 0.04em;
  text-decoration: none;
  fill: var(--table-description-text-color);

  color: var(--balance-text-color);

  transition: color 250ms linear;

  :hover,
  :focus {
    color: var(--general-accent-background-color);
  }
  .backToMain {
    width: 100%;
    height: 100%;
    fill: var(--table-description-text-color);
    transition: fill 250ms linear;
  }

  @media screen and (min-width: 768px) {
    text-align: right;
    margin-bottom: 0;
    top: 56px;
    left: 35px;
  }

  @media screen and (min-width: 1280px) {
    top: 56px;
    left: 91px;
  }
`;
