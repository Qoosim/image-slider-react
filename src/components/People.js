import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import PersonDetails from './PersonDetails';
import data from '../data';

const People = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index - 1);
    }, 5000)

    return (() => clearInterval(slider));

  }, [index]);

  return (
    <div className="section-center">
      {
        data.map((person, personIndex) => {
          let position = 'nextSlide';

          if (personIndex === index) {
            position = 'activeSlide';
          }

          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          return <PersonDetails key={person.id} person={person} position={position} />
        })
      }
      <button className="prev" onClick={() => setIndex(index - 1)}><FiChevronLeft /></button>
      <button className="next" onClick={() => setIndex(index + 1)}><FiChevronRight /></button>
    </div>
  )
}

export default People;
