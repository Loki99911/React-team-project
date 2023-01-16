import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(state => state.user.isLogin);

  return isLogin ? children : <Navigate to="/" />;
};
