import { ModalStyled } from './Modal.styled';
import { IoMdClose } from 'react-icons/io';
import { TbArrowBack } from 'react-icons/tb';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalOpened } from 'redux/selectors';
import { setModalOpened } from 'redux/modalOpenedSlice';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const modalOpened = useSelector(selectModalOpened);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  const handleCloseModal = e => {
    if (
      (e.type === 'click' && e.target === e.currentTarget) ||
      (e.type === 'keydown' && e.key === 'Escape')
    ) {
      dispatch(setModalOpened(false));
    }
  };

  return createPortal(
    <ModalStyled
      onClick={handleCloseModal}
      className={!modalOpened ? 'is-hidden' : ''}
    >
      <div className="modal">
        <div className="inner">
          <button type="buttn" className="close" onClick={handleCloseModal}>
            {isSmallScreen ? (
              <TbArrowBack className="return__icon" />
            ) : (
              <IoMdClose className="close__icon" />
            )}
          </button>
          <div className="text">{children}</div>
        </div>
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;
