import { Div, Span, Button, Wrapper, BackButton } from './UserInfo.styled';
import { ReactComponent as BackArrow } from 'images/backarrow.svg';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { setModalOpened } from 'redux/modalOpenedSlice';
import { selectModalOpened } from 'redux/selectors';

const UserInfo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const modalOpened = useSelector(selectModalOpened);
  const userName = useSelector(state => state.auth.user.username);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(logOut());
  };

  const closeModal = () => {
    dispatch(setModalOpened(false));
  };

  return (
    isLoggedIn && (
      <Div>
        {modalOpened && (
          <BackButton onClick={closeModal}>
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
