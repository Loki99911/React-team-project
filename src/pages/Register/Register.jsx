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
            <img
              src={logoMobile}
              alt="logo"
              className={`animate__animated animate__fadeInLeft`}
            />
          </RegisterImgBox>
        )}
        {isTablet && (
          <RegisterImgBox>
            <img
              src={logoTablet}
              alt="logo"
              className={`animate__animated animate__fadeInLeft`}
            />
          </RegisterImgBox>
        )}
        {isDesktop && (
          <RegisterImgBox>
            <img
              src={logoDesktop}
              alt="logo"
              className={`animate__animated animate__fadeInLeft`}
            />
          </RegisterImgBox>
        )}
        <LoginForm />
      </RegisterLayout>
    </>
  );
}
