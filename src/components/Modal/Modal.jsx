import { PropTypes } from 'prop-types';
import { ModalStyled } from './Modal.styled';
import { TfiClose } from 'react-icons/tfi';

const Modal = ({ onCloseModal, modalOpened, children }) => {
  return (
    <ModalStyled
      onClick={onCloseModal}
      className={!modalOpened ? 'is-hidden' : ''}
    >
      <div className="window">
        <div className="inner">
          <div className="container">
            <TfiClose onClick={onCloseModal} className="close"></TfiClose>
            <div className="text">{children}</div>
          </div>
        </div>
      </div>
    </ModalStyled>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  modalOpened: PropTypes.bool.isRequired,
};

export default Modal;
