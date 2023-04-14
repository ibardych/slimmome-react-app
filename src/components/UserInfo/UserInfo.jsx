import { Div, Span, Button } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserInfo = () => {
  const userName = useSelector(state => state.auth.user.username);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(logOut());
  };

  return (
    <Div>
      <Span>{userName}</Span>
      <Button onClick={clickHandler}>Exit</Button>
    </Div>
  );
};

export default UserInfo;
