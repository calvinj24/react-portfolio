import React from 'react';

function Modal({ onClose, currentProject }) {
  const { name, description } = currentProject;
  
  return(
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle"> {name} </h3>
        {/* large image here */}
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal;