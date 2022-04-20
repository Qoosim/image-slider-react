import React from 'react';
import PersonDetails from './PersonDetails';
import data from '../data';

const People = () => {
  return (
    <div className="section-center">
      {
        data.map((person) => {
          return <PersonDetails key={person.id} person={person} />
        })
      }
    </div>
  )
}

export default People;
