import { useMediaQuery } from 'react-responsive';

// export const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 1280 });
//   return isDesktop ? children : null;
// };

// export const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
//   return isTablet ? children : null;
// };

// export const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   return isMobile ? children : null;
// };

// export const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 });
//   return isNotMobile ? children : null;
// };

export const useMediaRules = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return { isMobile, isDesktop, isTablet };
};

