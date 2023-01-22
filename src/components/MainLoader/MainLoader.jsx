import logo from '../../images/logo.svg';
import { BackdropLoader } from './MainLoader.styled';

export const MainLoader = () => (
  <BackdropLoader>
    <img
      src={logo}
      alt="logo"
      width={300}
      className={`animate__animated animate__bounceOut`}
    />
  </BackdropLoader>
);
