import React from 'react';
import {
  NotifyBalanceContainer,
 
  NotifyBalanceText,
  NotifyBalanceTitle,
} from './NotifyBalance.styled';


export default function NotifyBalance() {
  // const [isOpen, setIsOpen] = useState(true);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  // const handleBackdropClick = event => {
  //   if (event.currentTarget === event.target) {
  //     handleClose();
  //   }
  // };

  return (
    
      // <NotifyBalanceBackdrop onClick={handleBackdropClick}>
        <NotifyBalanceContainer>
          <NotifyBalanceTitle>
            Hello! To get started, enter the current balance of your account!
          </NotifyBalanceTitle>
          <NotifyBalanceText>
            You can't spend money until you have it
          </NotifyBalanceText>
        </NotifyBalanceContainer>
      // </NotifyBalanceBackdrop>
    
  );
}
