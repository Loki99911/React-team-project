import styled from 'styled-components';
import bgDesk from '../../images/BgDesktopReg_1.png';
import bgDesk2 from '../../images/BgDesktopReg_2.png';
import bgTabl from '../../images/BgTablet_1.png';
import bgTabl2 from '../../images/BgTablet_2.png';

export const RegisterLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex-grow: 1;
  padding-top: 85px;
  padding-left: 20px;
  padding-bottom: auto;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-left: 170px;
    padding-right: 170px;
    background-image: url(${bgDesk}), url(${bgTabl});
    background-position: top 30px right 0px, bottom 55px left 100px;
    background-repeat: no-repeat;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgDesk2}), url(${bgTabl2});
    }
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: right;
    align-items: center;
    padding-top: 115px;
    padding-left: 90px;
    padding-bottom: 125px;
    padding-right: 170px;
    background-position: top 30px right 0px, bottom 50px left 100px;
  }
`;

export const RegisterImgBox = styled.div`
  display: flex;
`;
