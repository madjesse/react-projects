import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <div className="container">
      <h3>Question And Answers About Login</h3>
      <ul>
        {data.map(question => (
          <li key={question.id}>
            <SingleQuestion title={question.title} info={question.info} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
