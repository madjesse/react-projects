import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if (count < 0) {
      setText([data[0]]);
    } else if (count > data.length - 1) {
      setText(data);
    } else {
      setText(data.slice(0, count));
    }
  };
  
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="id" value={count} onChange={e => setCount(e.target.value)} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
