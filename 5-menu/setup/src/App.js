import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [category, setCategory] = useState('all');

  let filteredItems = [];

  if (category === 'all') {
    filteredItems = [...items];
  } else {
    filteredItems = items.filter(item => item.category === category);
  }

  const handleClick = e => {
    setCategory(e.target.value);
  }

  return (
    <section className="section">
      <h1 className="title">our menu</h1>
      <Categories onClick={handleClick} />
      <div className="section-center">
        {filteredItems.map(item => (
          <Menu img={item.img} title={item.title} price={item.price} desc={item.desc} />
        ))}
      </div>
    </section>
  );
}

export default App;
