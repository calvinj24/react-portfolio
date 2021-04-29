import React from 'react';

function Nav(props) {
  const {
    currentPage,
    setCurrentPage
  } = props;

  const title = '<Cal />'

  return (
    <header>
      <h1 className="logo">{title}</h1>
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
    </header>
  );
}

export default Nav;