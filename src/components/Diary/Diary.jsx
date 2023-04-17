import {
  DiaryStyled,
  DiaryStyledList,
  EmptyProductsMessage,
} from './Diary.styled';

import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import DatePicker from 'components/DatePicker/DatePicker';
import {
  selectDayId,
  selectEatenProducts,
  selectEatenProductsLoading,
  selectIsDeleting,
} from 'redux/diary/selectors';
import { deleteProductThunk } from 'redux/diary/operations';
import { LoaderSmall } from 'components/Loader/Loader';
import { AiOutlinePlus } from 'react-icons/ai';
import { DiaryForm } from 'components/DiaryForm/DiaryForm';
import { setProductModalOpened } from 'redux/ModalAddProductOpened/slice';
import ModalAddProduct from 'components/ModalAddProduct/ModalAddProduct';

export const DiaryMain = () => {
  const dispatch = useDispatch();
  const selectedDayId = useSelector(selectDayId);
  const eatenProductsLoading = useSelector(selectEatenProductsLoading);
  const eatenProducts = useSelector(selectEatenProducts);
  const eatenProductsSorted = [...eatenProducts].reverse();
  const [deletingProductId, setDeletingProductId] = useState(null);
  const isDeleting = useSelector(selectIsDeleting);
  const [isMobile, setIsMobile] = useState(false);

  const deleteProduct = id => {
    setDeletingProductId(id);
    dispatch(deleteProductThunk([id, selectedDayId]));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openAddProductModal = () => {
    dispatch(setProductModalOpened(true));
  };

  return (
    <DiaryStyled>
      <div className="mobile-diary-wrap">
        <div className="Diary__header-wraper-data">
          <div className="Diary__data">
            <DatePicker />
          </div>
        </div>

        {!isMobile && <DiaryForm />}

        {eatenProductsLoading ? (
          <LoaderSmall name="eatenProducts" />
        ) : eatenProductsSorted.length ? (
          <div className="Diarty__header-wrapper">
            <DiaryStyledList>
              {eatenProductsSorted.map(product => (
                <li key={product.id} className="Diary__list-wrapper">
                  <div className="Diarty__list">
                    <div className="Diary__list-name" title={product.title}>
                      {product.title}
                    </div>
                    <div className="Diary__list-gram">
                      {Math.ceil(product.weight)} g
                    </div>
                    <div className="Diary__list-kcal">
                      {Math.ceil(product.kcal)} <span>kcal</span>
                    </div>
                    <button
                      className="Diary__btn-delete"
                      type="button"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <AiOutlineClose />
                    </button>
                    {isDeleting && deletingProductId === product.id && (
                      <LoaderSmall name="deleteProduct" />
                    )}
                  </div>
                </li>
              ))}
            </DiaryStyledList>
          </div>
        ) : (
          <EmptyProductsMessage>
            You did not add any products!
          </EmptyProductsMessage>
        )}
        <button className="Diary__btn-add" onClick={openAddProductModal}>
          <AiOutlinePlus color="white" />
        </button>
        <ModalAddProduct />
      </div>

      {/* <DiaryStyled>Loading...</DiaryStyled> */}
    </DiaryStyled>
  );
};
