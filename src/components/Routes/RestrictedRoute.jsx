import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsAuth);

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
