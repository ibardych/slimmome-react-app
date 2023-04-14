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
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const closeModal = e => {
    dispatch(setModalOpened(false));
  };

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  return createPortal(
    <ModalStyled
      onClick={handleBackdropClick}
      className={!modalOpened ? 'is-hidden' : ''}
    >
      <div className="modal">
        <div className="inner">
          <button type="buttn" className="close" onClick={closeModal}>
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
