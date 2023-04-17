import {
  DiaryStyled,
  DiaryForm,
  DiaryStyledList,
  ProductsList,
  EmptyProductsMessage,
} from './Diary.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { ButtonDiary } from 'components/Styled/ButtonDiary.styled';
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
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import { InputWraper } from 'components/Form/Input.styled';

export const DiaryMain = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  /** selectedDate - це дата (що вибрана в дейтпікері), яку можна використати для запросу на сервер під час додавання продуктів */
  const selectedDate = useSelector(state => state.diary.selectedDate);
  const selectedDayId = useSelector(selectDayId);
  const eatenProductsLoading = useSelector(selectEatenProductsLoading);
  const eatenProducts = useSelector(selectEatenProducts);
  const eatenProductsSorted = [...eatenProducts].reverse();
  const [weight, setWeight] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [productId, setProductId] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = value => {
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

  const deleteProduct = id => {
    dispatch(deleteProductThunk([id, selectedDayId]));
  };

  const handleSubmit = () => {
    dispatch(
      addProductThunk({
        date: selectedDate,
        productId: productId,
        weight: weight,
      })
    );

    setSearchValue('');
    setWeight('');
  };

  const initialValues = { search: '', grams: '' };

  const schema = yup.object().shape({
    search: yup.string().min(1).max(30).required(),
    grams: yup.number().min(1).max(3000).required().positive().integer(),
  });

  const handleOnChange = e => {
    if (e.target.name === 'search') {
      handleSearchChange(e.target.value);
    }
    if (e.target.name === 'grams') {
      setWeight(e.target.value);
    }
  };

  return (
    <DiaryStyled>
      <div className="mobile-diary-wrap">
        <div className="Diary__header-wraper-data">
          <div className="Diary__data">
            <DatePicker />
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <DiaryForm autoComplete="off" onChange={handleOnChange}>
            <InputWraper>
              <Field
                type="text"
                name="search"
                placeholder=" "
                value={searchValue}
              />
              <label htmlFor="search">Enter product name</label>
              <ErrorMessage className="error" component="div" name="search" />
            </InputWraper>

            <InputWraper>
              <Field
                type="number"
                name="grams"
                placeholder=" "
                value={weight || ''}
              />
              <label htmlFor="grams">Grams</label>
              <ErrorMessage className="error" component="div" name="grams" />
            </InputWraper>

            <ButtonDiary type="submit">
              <AiOutlinePlus color="white" />
            </ButtonDiary>

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
          </DiaryForm>
        </Formik>
        {eatenProductsLoading ? (
          <span>Loading...</span>
        ) : eatenProductsSorted.length ? (
          <div className="Diarty__header-wrapper">
            <DiaryStyledList>
              {eatenProductsSorted.map(product => (
                <li key={product.id} className="Diary__list-wrapper">
                  <ul className="Diarty__list">
                    <li className="Diary__list-name" title={product.title}>
                      {product.title}
                    </li>
                    <li className="Diary__list-gram">
                      {Math.ceil(product.weight)} g
                    </li>
                    <li className="Diary__list-kcal">
                      {Math.ceil(product.kcal)} <span>kcal</span>
                    </li>
                    <button
                      className="Diary__btn-delete"
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
