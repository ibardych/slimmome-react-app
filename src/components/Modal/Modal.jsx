import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ModalStyled } from './Modal.styled';
import { TbArrowBack } from 'react-icons/tb';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  return (
    <>
      <button onClick={openModal}>Відкрити</button>
      {isOpen && (
        <ModalStyled
          onClick={handleBackdropClick}
          className={!isOpen ? 'is-hidden' : ''}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="modal">
            <button className="close" onClick={closeModal}>
              {isSmallScreen ? (
                <TbArrowBack className="return__icon" />
              ) : (
                <IoMdClose className="close__icon" />
              )}
            </button>
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
            <button type="button">Start losing weight</button>
          </div>
        </ModalStyled>
      )}
    </>
  );
}

export default Modal;

// import { PropTypes } from 'prop-types';
// import { ModalStyled } from './Modal.styled';
// import { TfiClose } from 'react-icons/tfi';

// const Modal = ({ onCloseModal, modalOpened, children }) => {
//   return (
//     <ModalStyled
//       onClick={onCloseModal}
//       className={!modalOpened ? 'is-hidden' : ''}
//     >
// <div className="window">
//   <div className="inner">
//     <div className="container">
//       <TfiClose onClick={onCloseModal} className="close"></TfiClose>
//       <div className="text">{children}</div>
//     </div>
//   </div>
// </div>
//     </ModalStyled>
//   );
// };

// Modal.propTypes = {
//   onCloseModal: PropTypes.func.isRequired,
//   modalOpened: PropTypes.bool.isRequired,
// };

// export default Modal;
