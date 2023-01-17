import styled from 'styled-components';
// import { HandySvg } from 'handy-svg';
import bgDesk from '../../images/BgDesktop_1.png';
import bgDesk2 from '../../images/BgDesktop_2.png';
import bgTabl from '../../images/BgTablet_1.png';
import bgTabl2 from '../../images/BgTablet_2.png';

export const StyledHomePage = styled.div`
  padding: 46px 0px 0px 0px;
  margin: 0 auto;
  height: 100vh;

  @media screen and (min-width: 768px) {
    /* height: 1178px; */
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
    /* height: 795px; */
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
