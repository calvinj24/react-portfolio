import { React, useState } from 'react';
import { useSpring, animated } from 'react-spring'

function Message(props) {
  const {currentPage} = props
  const spring = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 }, 
    reset: true
  })

  return (
    <div className="message ft-light">

      {currentPage==="about" &&
        <animated.div style={spring}>
          <div className="greeting">
            <h2>Hi there!</h2>
            <h1>I'm Cal Johnson</h1>
            <p>A front-end web developer.</p>
            <div className="cta">
              <button className="contact-btn">Contact Me</button>
              <button className="my-work-btn">My Work</button>
            </div>
          </div>
        </animated.div>
      }

    </div>
  )
}

export default Message;