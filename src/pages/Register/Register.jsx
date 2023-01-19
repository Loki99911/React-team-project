import Background from '../../components/Background/Background';
import LoginForm from '../../components/LoginForm/LoginForm';
import logoMobile from '../../images/Kapu$ta_mobile.svg';
import logoTablet from '../../images/Kapu$ta_tablet.svg';
import logoDesktop from '../../images/Kapu$ta_desktop.svg';
import { RegisterLayout, RegisterImgBox } from './Register.styled';
import { useMediaRules } from '../../MediaRules/MediaRules';

export default function Register() {
  const { isMobile, isDesktop, isTablet } = useMediaRules();
  return (
    <>
      <Background />
      <RegisterLayout>
        {isMobile && (
          <RegisterImgBox>
            <img src={logoMobile} alt="logo" />
          </RegisterImgBox>
        )}
        {isTablet && (
          <RegisterImgBox>
            <img src={logoTablet} alt="logo" />
          </RegisterImgBox>
        )}
        {isDesktop && (
          <RegisterImgBox>
            <img src={logoDesktop} alt="logo" />
          </RegisterImgBox>
        )}
        <LoginForm />
      </RegisterLayout>
    </>
  );
}
