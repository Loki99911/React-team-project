import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
}) => {
  const isLogin = useSelector(state => state.user.isLogin);
  const shouldRedirect = isLogin && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
