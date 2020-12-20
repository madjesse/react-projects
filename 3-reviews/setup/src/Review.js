import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const updateIndex = index => {
    if (index < 0) {
      return people.length - 1;
    } else {
      if (index > people.length - 1) {
        return 0;
      }
      return index++;
    }
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    setIndex(updateIndex(randomNumber));
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon"><FaQuoteRight /></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => setIndex(updateIndex(index))}><FaChevronLeft /></button>
        <button className="next-btn" onClick={() => setIndex(updateIndex(index))}><FaChevronRight /></button>
        <button className="random-btn" onClick={randomPerson}>surprise me</button>
      </div>
    </article>
  );
};

export default Review;
