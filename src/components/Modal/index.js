import React, { useState } from 'react';

function Modal({ onClose, currentProject }) {
  const { name, description, github, deployment } = currentProject;

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
       <div>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={deployment} target="_blank" rel="noopener noreferrer">Deployment</a> 
        </div>
      </div>
    </div>
  )
}

export default Modal;