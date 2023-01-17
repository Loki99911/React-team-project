import LoginForm  from '../../components/LoginForm/LoginForm';
import logo from '../../images/Kapu$ta_desktop.svg';
import { RegisterLayout } from './Register.styled';

export default function Register() {
    return (
      <RegisterLayout>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <LoginForm />
      </RegisterLayout>
    );
}
