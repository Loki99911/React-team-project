import { Link } from 'react-router-dom';
import { useState } from 'react';
import { InfoModal } from 'components/InfoModal/InfoModal';
import logo from '../../images/logo.svg';
import logoutSvg from '../../images/logout.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/Auth/authOperations';
import {
  Header,
  UserInfo,
  LogoutBtn,
  UserIcon,
  UserText,
  LogoutBtnText,
  UserTextWrap,
} from './AppBar.styled';
import { getEmail } from 'redux/Auth/authSelectors';
import { useMediaRules } from '../../MediaRules/MediaRules';
import CustomizedSwitches from 'components/Theme/ThemeBtn';

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
  const { isMobile } = useMediaRules();
  return (
    <>
      <Header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <CustomizedSwitches />
        {userMail && (
          <UserInfo>
            <UserIcon>{userMail[0].toUpperCase()}</UserIcon>
            {!isMobile && (
              <UserTextWrap>
                <UserText>
                  {userMail.split('').slice(0, userMail.indexOf('@')).join('')}
                </UserText>
              </UserTextWrap>
            )}
            {!isMobile && (
              <LogoutBtn type="button" onClick={handleModalOpen}>
                <LogoutBtnText>Exit</LogoutBtnText>
              </LogoutBtn>
            )}
            {isMobile && (
              <LogoutBtn type="button" onClick={handleModalOpen}>
                <img src={logoutSvg} alt="" />
              </LogoutBtn>
            )}
          </UserInfo>
        )
        }
      </Header >
      {modalOpen && (
        <InfoModal closeModal={handleModalClose} dispatch={handleClick}>
          Do you really want to leave?
        </InfoModal>
      )
      }
    </>
  );
};
