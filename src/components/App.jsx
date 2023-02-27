import { Routes, Route, useSearchParams } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';

import { selectIsRefreshing, selectToken } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { current, social } from 'redux/auth/operations';
import { Loader } from './Loader/Loader';

const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isRefreshisng = useSelector(selectIsRefreshing);
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');

  useEffect(() => {
    if (accessToken) {
      dispatch(social(accessToken));
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [dispatch, token]);

  return isRefreshisng ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/user" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
          }
        />

        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
