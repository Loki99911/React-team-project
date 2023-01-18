import PropTypes from 'prop-types';
import { StyledWhiteButton } from './Buttons.styled';

export const WhiteButton = ({ children, closeModal }) => {
  return <StyledWhiteButton onClick={closeModal}>{children}</StyledWhiteButton>;
};

WhiteButton.propTypes = {
  children: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
};
