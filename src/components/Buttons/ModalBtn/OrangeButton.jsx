import { StyledOrangeButton } from './Buttons.styled';

export const OrangeButton = ({ children, dispatch, closeModal }) => {
  const handleClick = () => {
    dispatch();
    closeModal();
  };

  return (
    <StyledOrangeButton onClick={handleClick}>{children}</StyledOrangeButton>
  );
};
