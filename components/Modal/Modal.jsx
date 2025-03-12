import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalContent = (
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div 
        className={styles['modal-container']} 
      >
        {children}
        <button className={styles['modal-close-button']} onClick={onClose}>
          <CloseIcon/>
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.body // This mounts the modal directly to the body
  );
};

export default Modal;