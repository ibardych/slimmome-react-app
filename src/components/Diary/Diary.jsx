import {
  DiaryStyled,
  DiaryStyledInp1,
  DiaryStyledInp2,
  DiaryForm,
  DiaryStyledList,
} from './Diary.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { ButtonDiary } from 'components/Styled/Button-Diary.styled';
import { AiOutlineCalendar } from 'react-icons/ai';

export const DiaryMain = () => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear().toString();
  const currentDate = `${day}.${month}.${year}`;

  return (
    <DiaryStyled>
      <div className="Diary__header-wraper-data">
        <p className="Diary__data">{currentDate}</p>
        <AiOutlineCalendar color="#9B9FAA" className="Diary__icon-data" />
      </div>
      <DiaryForm>
        <div className="Diary__box_input">
          <div className="Diary__box_line">
            <DiaryStyledInp1
              className="Diary__input_name"
              type="text"
              placeholder="Enter product name"
            />
          </div>
          <div className="Diary__box_line">
            <DiaryStyledInp2
              className="Diary__input_grams"
              type="number"
              placeholder="Grams"
            />
          </div>
        </div>

        <ButtonDiary>
          <AiOutlinePlus color="white" />
        </ButtonDiary>
      </DiaryForm>
      <div className="Diarty__header-wrapper">
        <DiaryStyledList>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
          <li className="Diarty__list-wrapper">
            <ul className="Diarty__list">
              <li className="Diary__list-name">name</li>
              <li className="Diary__list-gram">100g</li>
              <li className="Diary__list-kcal">320kcal</li>
              <button className="Diary__btn" type="button">
                <AiOutlineClose />
              </button>
            </ul>
          </li>
        </DiaryStyledList>
        {/* <ButtonDiary>
          <AiOutlinePlus color="white" />
        </ButtonDiary> */}
      </div>

      {/* <DiaryStyled>Loading...</DiaryStyled> */}
    </DiaryStyled>
  );
};
