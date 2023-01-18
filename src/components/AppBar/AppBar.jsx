import { Link } from 'react-router-dom';
import { useState } from 'react';
import { InfoModal } from 'components/InfoModal/InfoModal';
import logo from '../../images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoggedIn, selectUser } from 'redux/selectors';//Селектор Юзера
// const userEmail = useSelector(selectUser);
import { logout } from 'redux/Auth/authOperations';
import {
  Header,
  UserInfo,
  LogoutBtn,
  UserIcon,
  UserText,
} from './AppBar.styled';
import { getEmail } from 'redux/Auth/authSelectors';

export const AppBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const userMail = useSelector(getEmail);
  // Handle update users balance
  const handleClick = () => {
    dispatch(logout());
  };
  // Open modal window
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  // Close modal window
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {userMail&&<UserInfo>
          <UserIcon>{userMail[0].toUpperCase()}</UserIcon>
          <UserText>
            {userMail.split('').slice(0, userMail.indexOf('@')).join('')}
          </UserText>
          <LogoutBtn type="button" onClick={handleModalOpen}>
            Exit
          </LogoutBtn>
        </UserInfo>}
      </Header>
      {modalOpen && (
        <InfoModal closeModal={handleModalClose} dispatch={handleClick}>
          Do you really want to leave?
        </InfoModal>
      )}
    </>
  );
};
