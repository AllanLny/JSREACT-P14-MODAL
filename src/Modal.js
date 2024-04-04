import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return isOpen ? (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal">
        <div className="modal-content">
          {children}
          <button className="modal-close" onClick={closeModal}>X</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
