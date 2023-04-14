import { useSelector } from 'react-redux';
import { MainContainer } from './App.styled';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
// import { Loader } from 'components/Loader/Loader';

// const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Calculator = lazy(() => import('pages/Calculator'));
const Diary = lazy(() => import('pages/Diary'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

const App = () => {
  const isRefreshing = useSelector(state => state.auth.isRefreshing)
  return isRefreshing ? (
    'Application is loading...'
  ) : (
    <MainContainer>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/login" replace={true} />} />
          {/* <Route index element={<Navigate to="/login" replace={true} />} /> */}
          <Route
            path="login"
            element={<RestrictedRoute redirectTo="/" component={<Login />} />}
          />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/" component={<Register />} />
            }
          />
          <Route
            path="/diary"
            element={<PrivateRoute redirectTo="/login" component={<Diary />} />}
          />         
          <Route
            path="/calculator"
            element={
              <PrivateRoute redirectTo="/login" component={<Calculator />} />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </MainContainer>
  );
};

export default App;
