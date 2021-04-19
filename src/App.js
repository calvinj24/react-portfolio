import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';

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
      </main>
    </div>
  );
}

export default App;
