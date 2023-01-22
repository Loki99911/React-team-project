import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  StyledModalWindow,
  StyledContentDiv,
  StyledText,
  StyledDivWithButtons,
  StyledCloseButton,
  StyledModalBackdrop,
} from './InfoModal.styled';
import { OrangeButton } from 'components/Buttons/ModalBtn/OrangeButton';
import { WhiteButton } from 'components/Buttons/ModalBtn/WhiteButton';
import { ReactComponent as Close } from '../../images/close.svg';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

export const InfoModal = ({ children, closeModal, dispatch }) => {
  const handleEscapeClose = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  });

  return createPortal(
    <StyledModalBackdrop onClick={handleBackdropClose}>
      <StyledModalWindow>
        <StyledCloseButton onClick={closeModal}>
          <Close />
        </StyledCloseButton>
        <StyledContentDiv>
          <StyledText>{children}</StyledText>
          <StyledDivWithButtons>
            <OrangeButton dispatch={dispatch} closeModal={closeModal}>
              YES
            </OrangeButton>
            <WhiteButton closeModal={closeModal}>NO</WhiteButton>
          </StyledDivWithButtons>
        </StyledContentDiv>
      </StyledModalWindow>
    </StyledModalBackdrop>,
    modalRoot
  );
};
