import {
  DiaryStyled,
  DiaryStyledInp1,
  DiaryStyledInp2,
  DiaryForm,
  DiaryStyledList,
  ProductsList,
  EmptyProductsMessage,
} from './Diary.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { ButtonDiary } from 'components/Styled/Button-Diary.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from 'redux/dropdown/operations';
import { useState } from 'react';
import { selectProducts } from 'redux/dropdown/selectors';
import DatePicker from 'components/DatePicker/DatePicker';
import {
  selectDayId,
  selectEatenProducts,
  selectEatenProductsLoading,
} from 'redux/diary/selectors';
import { addProductThunk, deleteProductThunk } from 'redux/diary/operations';

export const DiaryMain = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  /** selectedDate - це дата (що вибрана в дейтпікері), яку можна використати для запросу на сервер під час додавання продуктів */
  const selectedDate = useSelector(state => state.diary.selectedDate);
  const selectedDayId = useSelector(selectDayId);
  const eatenProductsLoading = useSelector(selectEatenProductsLoading);
  const eatenProducts = useSelector(selectEatenProducts);
  const [weight, setWeight] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [productId, setProductId] = useState('5d51694802b2373622ff552c');
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
    // setShowDropdown(false);
  };

  const deleteProduct = id => {
    dispatch(deleteProductThunk([id, selectedDayId]));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addProductThunk({
        date: selectedDate,
        productId: productId,
        weight: weight,
      })
    );
  };

  const chengeWeight = e => {
    setWeight(e.target.value);
  };

  return (
    <DiaryStyled>
      <div className="mobile-diary-wrap">
        <div className="Diary__header-wraper-data">
          <div className="Diary__data">
            <DatePicker />
          </div>
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
                    <li
                      onClick={() => {
                        setSearchValue(product.title.ua);
                        setProductId(product._id);
                        setShowDropdown(false);
                      }}
                      key={product.title.ua}
                    >
                      {product.title.ua}
                    </li>
                  ))}
                </ProductsList>
              )}
            </div>
            <div className="Diary__box_line">
              <DiaryStyledInp2
                value={weight}
                onChange={chengeWeight}
                className="Diary__input_grams"
                name="grams"
                type="number"
                placeholder="Grams"
              />
            </div>
          </div>

          <ButtonDiary onClick={handleSubmit}>
            <AiOutlinePlus color="white" />
          </ButtonDiary>
        </DiaryForm>
        {eatenProductsLoading ? (
          <span>Loading...</span>
        ) : eatenProducts.length ? (
          <div className="Diarty__header-wrapper">
            <DiaryStyledList>
              {eatenProducts.map(product => (
                <li key={product.id} className="Diarty__list-wrapper">
                  <ul className="Diarty__list">
                    <li className="Diary__list-name" title={product.title}>{product.title}</li>
                    <li className="Diary__list-gram">
                      {product.weight?.toFixed(2)} g
                    </li>
                    <li className="Diary__list-kcal">
                      {product.kcal?.toFixed(2)} kcal
                    </li>
                    <button
                      className="Diary__btn"
                      type="button"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <AiOutlineClose />
                    </button>
                  </ul>
                </li>
              ))}
            </DiaryStyledList>
          </div>
        ) : (
          <EmptyProductsMessage>
            You did not add any products!
          </EmptyProductsMessage>
        )}
        <button className="Diary__btn-add">
          <AiOutlinePlus color="white" />
        </button>
      </div>

      {/* <DiaryStyled>Loading...</DiaryStyled> */}
    </DiaryStyled>
  );
};
