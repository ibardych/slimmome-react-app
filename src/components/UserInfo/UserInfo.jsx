import { Div, Span, Button, Wrapper, BackButton } from './UserInfo.styled';
import { ReactComponent as BackArrow } from 'images/backarrow.svg';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';

const UserInfo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(state => state.auth.user.username);
  const dispatch = useDispatch();
  const location = useLocation();
  const { from } = location.state || '/';

  const clickHandler = () => {
    dispatch(logOut());
  };

  return (
    isLoggedIn && (
      <Div>
        {from && (
          <BackButton to={from}>
            <BackArrow width="12" height="7" />
          </BackButton>
        )}
        <Wrapper>
          <Span>{userName}</Span>
          <Button onClick={clickHandler}>Exit</Button>
        </Wrapper>
      </Div>
    )
  );
};

export default UserInfo;
