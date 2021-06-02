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
            <button className="contact-btn">Contact Me</button>
            <button className="my-work-btn">My Work</button>
          </div>
        </div>
      }

    </div>
  )
}

export default Message;