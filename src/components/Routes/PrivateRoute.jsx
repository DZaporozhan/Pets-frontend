import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsAuth);

  return isLogin ? Component : <Navigate to={redirectTo} />;
};
