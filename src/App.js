import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import Message from './components/Message';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div>
      <header>
        <div class="headerBG"></div>
        <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Nav>
        <Message
          currentPage={currentPage}
        ></Message>
      </header>
      <main>
        {currentPage === 'about' && 
          <About></About>
        }
        {currentPage === 'portfolio' &&
          <Portfolio></Portfolio>
        }
        {currentPage === 'contact' &&
          <ContactForm></ContactForm>
        }
      </main>
    </div>
  );
}

export default App;
