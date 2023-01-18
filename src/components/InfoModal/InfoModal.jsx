import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
import {
  StyledModalWindow,
  StyledContentDiv,
  StyledText,
  StyledDivWithButtons,
  StyledCloseButton,
  StyledModalBackdrop,
} from './InfoModal.styled';
import { OrangeButton } from 'components/Buttons/OrangeButton';
import { WhiteButton } from 'components/Buttons/WhiteButton';
import { ReactComponent as Close } from '../../images/close.svg';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

export const InfoModal = ({ children, closeModal, dispatch }) => {
  // Close on Esc button
  const handleEscapeClose = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };
  // Close on backdrop click
  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  // No scroll of body when modal window is open
  useEffect(() => {
    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  });

  return createPortal(
    // Backdrop
    <StyledModalBackdrop
     
      onClick={handleBackdropClose}
    >
      {/* Modal window */}
      <StyledModalWindow>
        {/* Close button img X */}
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
