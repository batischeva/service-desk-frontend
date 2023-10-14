import React from 'react';
import '../../style/Modal.css';

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
        {children}
        <button className='modal-btn-close' onClick={() => setActive(false)}/>
      </div>
    </div>
  );
};

export default Modal;
