import Modal from 'components/Modal/Modal';
import { ModalDailyCaloriesStyled } from './ModalDailyCalories.styled';
import { Button } from 'components/Styled';

export const ModalDailyCalories = () => {
  return (
    <Modal>
      <ModalDailyCaloriesStyled>
        <h2 className="title"> Your recommended daily calorie intake is</h2>
        <p className="kcal">
          <span className="kcal-number">2800</span>
          <span className="kcal-text">kcal</span>
        </p>
        <div className="recomendation">
          <p className="recomendation__title">Foods you should not eat</p>
          <ol className="recomendation__list">
            <li className="recomendation__item">Flour products</li>
            <li className="recomendation__item">Milk</li>
            <li className="recomendation__item">Red meat</li>
            <li className="recomendation__item">Smoked meats</li>
          </ol>
        </div>
        <div className="button-container">
          <Button className="orange" type="button">
            Start losing weight
          </Button>
        </div>
      </ModalDailyCaloriesStyled>
    </Modal>
  );
};
