import {
  DiaryStyled,
  DiaryStyledInp1,
  DiaryStyledInp2,
  DiaryForm,
  DiaryStyledList,
  ProductsList,
} from './Diary.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { ButtonDiary } from 'components/Styled/Button-Diary.styled';
import { AiOutlineCalendar } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from 'redux/dropdown/operations';
import { useState } from 'react';
import { selectProducts } from 'redux/dropdown/selectors';

export const DiaryMain = () => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear().toString();
  const currentDate = `${day}.${month}.${year}`;

  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = event => {
    const { value } = event.target;
    setSearchValue(value);

    dispatch(fetchProductsList(value));
    setShowDropdown(true);

    if (value.length === 0) {
      setShowDropdown(false);
    }
  };

  const filteredProducts = products.filter(product =>
    product.title.ua.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleInputBlur = () => {
    setShowDropdown(false);
  };

  return (
    <DiaryStyled>
      <div className="mobile-diary-wrap">
        <div className="Diary__header-wraper-data">
          <p className="Diary__data">{currentDate}</p>
          <AiOutlineCalendar color="#9B9FAA" className="Diary__icon-data" />
        </div>
        <DiaryForm>
          <div className="Diary__box_input">
            <div className="Diary__box_line">
              <DiaryStyledInp1
                type="text"
                id="search"
                name="search"
                value={searchValue}
                onChange={handleSearchChange}
                onBlur={handleInputBlur}
                className="Diary__input_name"
                placeholder="Enter product name"
              />
              {showDropdown && filteredProducts.length > 1 && (
                <ProductsList>
                  {filteredProducts.map(product => (
                    <li key={product.title.ua}>{product.title.ua}</li>
                  ))}
                </ProductsList>
              )}
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
      </div>

      {/* <DiaryStyled>Loading...</DiaryStyled> */}
    </DiaryStyled>
  );
};
