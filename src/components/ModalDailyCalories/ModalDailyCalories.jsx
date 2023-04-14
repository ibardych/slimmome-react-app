import { useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';
import { ModalDailyCaloriesStyled } from './ModalDailyCalories.styled';
import { Button } from 'components/Styled';
import {
  selectNotAllowedProducts,
  selectDailyRate,
} from 'redux/calculator/selectors';

export const ModalDailyCalories = () => {
  // const isLoading = useSelector(selectIsLoading);
  const notAllowedProducts = useSelector(selectNotAllowedProducts);
  const dailyRate = useSelector(selectDailyRate);

  return (
    <Modal>
      <ModalDailyCaloriesStyled>
        <h2 className="title"> Your recommended daily calorie intake is</h2>
        <p className="kcal">
          <span className="kcal-number">{dailyRate}</span>
          <span className="kcal-text">kcal</span>
        </p>
        {notAllowedProducts.length > 0 &&
          <div className="recomendation">
            <p className="recomendation__title">Foods you should not eat</p>
            <ol className="recomendation__list">
              <li className="recomendation__item">Flour products</li>
              <li className="recomendation__item">Milk</li>
              <li className="recomendation__item">Red meat</li>
              <li className="recomendation__item">Smoked meats</li>
            </ol>
          </div>
        }
        <div className="button-container">
          <Button className="orange" type="button">
            Start losing weight
          </Button>
        </div>
      </ModalDailyCaloriesStyled>
    </Modal>
  );
};
