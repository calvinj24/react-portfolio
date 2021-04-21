import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div>
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <main>
        {currentPage === 'about' && 
          <About></About>
        }
        {currentPage === 'portfolio' &&
          <Portfolio></Portfolio>
        }
      </main>
    </div>
  );
}

export default App;
