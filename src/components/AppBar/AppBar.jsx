import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoggedIn, selectUser } from 'redux/selectors';//Селектор Юзера
// const userEmail = useSelector(selectUser);
import {
  Header,
  UserInfo,
  LogoutBtn,
  UserIcon,
  UserText,
} from './AppBar.styled';


export const AppBar = () => {
  return (
    <Header>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <UserInfo>
        <UserIcon>E</UserIcon> {/* {userEmail[0].toUpperCase()} */}
        <UserText>Email</UserText>
        {/* {userEmail} */}
        <LogoutBtn type="button">Exit</LogoutBtn>
      </UserInfo>
    </Header>
  );
};
