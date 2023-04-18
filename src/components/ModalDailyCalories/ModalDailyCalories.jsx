import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';
import { ModalDailyCaloriesStyled } from './ModalDailyCalories.styled';
import { Button } from 'components/Styled';
import {
  selectNotAllowedProducts,
  selectDailyRate,
} from 'redux/calculator/selectors';
import { setModalOpened } from 'redux/modalOpenedSlice';
import { useNavigate } from 'react-router-dom';
import { selectIsLoading } from 'redux/calculator/selectors';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const ModalDailyCalories = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notAllowedProducts = useSelector(selectNotAllowedProducts);
  // console.log(notAllowedProducts);

  const dailyRate = useSelector(selectDailyRate);

  const clickHandler = () => {
    dispatch(setModalOpened(false));
    if (isLoggedIn) navigate('/diary');
    else navigate('/register');
  };

  return (
    <Modal>
      {isLoading ? (
        <Loader />
      ) : (
        <ModalDailyCaloriesStyled>
          <h2 className="title"> Your recommended daily calorie intake is</h2>
          <p className="kcal">
            <span className="kcal-number">{dailyRate}</span>
            <span className="kcal-text">kcal</span>
          </p>
          {notAllowedProducts.length > 0 && (
            <div className="recomendation">
              <p className="recomendation__title">Foods you should not eat</p>
              <ul className="recomendation__list">
                {notAllowedProducts.map(pr => (
                  <li className="recomendation__item" key={nanoid()}>
                    {pr}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="button-container">
            <Button className="orange" type="button" onClick={clickHandler}>
              Start losing weight
            </Button>
          </div>
        </ModalDailyCaloriesStyled>
      )}
    </Modal>
  );
};
