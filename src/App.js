import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import Title from './components/Title';
import People from './components/People';

function App() {
  return (
    <section className="section">
      <Title />
      <People />
    </section>
  );
}

export default App;
