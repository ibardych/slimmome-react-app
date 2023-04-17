import { InputWraper } from 'components/Form/Input.styled';
import { ButtonDiary } from 'components/Styled/ButtonDiary.styled';
import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductThunk } from 'redux/diary/operations';
import { fetchProductsList } from 'redux/dropdown/operations';
import { AiOutlinePlus } from 'react-icons/ai';
import * as yup from 'yup';
import { selectIsLoading, selectProducts } from 'redux/dropdown/selectors';
import { LoaderSmall } from 'components/Loader/Loader';
import { FormikForm, ProductsList } from './DiaryForm.styled';
import { Button } from 'components/Styled';
import { setProductModalOpened } from 'redux/ModalAddProductOpened/slice';

export const DiaryForm = ({ type }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.diary.selectedDate);
  const [productId, setProductId] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [weight, setWeight] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const isFetchingProducts = useSelector(selectIsLoading);
  const products = useSelector(selectProducts);
  const initialValues = { search: '', grams: '' };

  const schema = yup.object().shape({
    search: yup.string().min(1).max(30).required(),
    grams: yup.number().min(1).max(3000).required().positive().integer(),
  });

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
    dispatch(setProductModalOpened(false));
  };

  const handleSearchChange = value => {
    setSearchValue(value);

    dispatch(fetchProductsList(value));
    setShowDropdown(true);

    if (value.length === 0) {
      setShowDropdown(false);
    }
  };

  const handleOnChange = e => {
    if (e.target.name === 'search') {
      handleSearchChange(e.target.value);
    }
    if (e.target.name === 'grams') {
      setWeight(e.target.value);
    }
  };

  const filteredProducts = products.filter(product =>
    product.title.ua.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormikForm autoComplete="off" onChange={handleOnChange} className={type}>
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

        {type !== 'mobile' && (
          <ButtonDiary type="submit">
            <AiOutlinePlus color="white" />
          </ButtonDiary>
        )}

        {type === 'mobile' && (
          <Button type="submit" className="orange">
            Add
          </Button>
        )}

        {showDropdown && isFetchingProducts && (
          <ProductsList>
            <LoaderSmall />
          </ProductsList>
        )}

        {showDropdown && !isFetchingProducts && filteredProducts.length > 1 && (
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
      </FormikForm>
    </Formik>
  );
};
