import React from 'react';

function Message(props) {
  const {currentPage} = props

  return (
    <div className="message ft-light">

      {currentPage==="about" &&
        <div className="greeting">
          <h2>Hi there!</h2>
          <h1>I'm Cal Johnson</h1>
          <p>A front-end web developer.</p>
          <div className="cta">
            <a href="/" className="button">Hire Me</a>
            <a href="/" className="button">My Work</a>
          </div>
        </div>
      }

    </div>
  )
}

export default Message;