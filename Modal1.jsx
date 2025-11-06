import React from 'react'
import { createPortal } from 'react-dom';

function Modal1({children}) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
}

export default Modal1;
