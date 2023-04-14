import { useDispatch, useSelector } from 'react-redux';
import { MainContainer } from './App.styled';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Loader } from 'components/Loader/Loader';
import Home from 'pages/Home';
import { refreshUser } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/calculator/selectors';
import { selectToken } from 'redux/auth/selectors';
import axios from 'axios';

// const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Calculator = lazy(() => import('pages/Calculator'));
const Diary = lazy(() => import('pages/Diary'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    axios.defaults.headers.common.Authorization = token
      ? `Bearer ${token}`
      : '';
  }, [token]);

  return (
    <>
      {isRefreshing && <Loader />}
      {isLoading && <Loader />}

      {!isRefreshing && (
        <MainContainer>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route
                path="login"
                element={
                  <RestrictedRoute redirectTo="/" component={<Login />} />
                }
              />
              <Route
                path="register"
                element={
                  <RestrictedRoute redirectTo="/" component={<Register />} />
                }
              />
              <Route
                path="diary"
                element={
                  <PrivateRoute redirectTo="/login" component={<Diary />} />
                }
              />
              <Route
                path="calculator"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<Calculator />}
                  />
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </MainContainer>
      )}
    </>
  );
};

export default App;
