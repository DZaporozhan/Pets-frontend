import { Navigate } from 'react-router-dom';
import { isAuth } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(isAuth);

  return isLogin ? Component : <Navigate to={redirectTo} />;
};
