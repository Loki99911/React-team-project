import styled from 'styled-components';
import bgDesk from '../../images/BgDesktopReg_1.png';
import bgDesk2 from '../../images/BgDesktopReg_2.png';
import bgTabl from '../../images/BgTablet_1.png';
import bgTabl2 from '../../images/BgTablet_2.png';

export const RegisterLayout = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex-grow: 1;
  padding: 115px 90px 125px auto;

  @media screen and (min-width: 768px) {
    /* height: 1178px; */
    padding: 40px 32px 60px 32px;
    background-image: url(${bgDesk}), url(${bgTabl});
    background-position: top 30px right 0px, bottom 55px left 100px;
    background-repeat: no-repeat;
    /* background-size: contain, auto; */

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgDesk2}), url(${bgTabl2});
    }
  }
  @media screen and (min-width: 1280px) {
    /* height: 795px; */
    padding: 40px 91px 83px 91px;
    background-position: top 30px right 0px, bottom 50px left 100px;
  }
`;
