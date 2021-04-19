import React from 'react';

function Nav(props) {
  const {
    currentPage,
    setCurrentPage
  } = props;

  return (
    <header>
      <h1>Cal</h1>
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={() => setCurrentPage('about')}>
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setCurrentPage('portfolio')}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setCurrentPage('contact')}>
              Contact Me
            </a>
          </li>
          <li>
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