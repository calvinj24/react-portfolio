import React from 'react';

function Nav(props) {
  const {
    currentPage,
    setCurrentPage
  } = props;
  
  const logo = `<CJ>`
  return (
    <div className="navContainer">
      <h1 className="logo">{logo}</h1>
      <nav className="navbar">
        <ul>
          <li className={`${currentPage==='about' && 'navActive'}`}>
            <a href="#about" onClick={() => setCurrentPage('about')}>
              About Me
            </a>
          </li>
          <li className={`${currentPage==='portfolio' && 'navActive'}`}>
            <a href="#portfolio" onClick={() => setCurrentPage('portfolio')}>
              Portfolio
            </a>
          </li>
          <li className={`${currentPage==='contact' && 'navActive'}`}>
            <a href="#contact" onClick={() => setCurrentPage('contact')}>
              Contact Me
            </a>
          </li>
          <li className={`${currentPage==='resume' && 'navActive'}`}>
            <a href="#resume" onClick={() => setCurrentPage('resume')}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;