import React from 'react';

const Categories = ({onClick}) => {
  return (
    <nav className="menu">
      <ul className="btn-container">
        <li><button className="filter-btn" value="all" onClick={onClick}>all</button></li>
        <li><button className="filter-btn" value="breakfast" onClick={onClick}>breakfast</button></li>
        <li><button className="filter-btn" value="lunch" onClick={onClick}>lunch</button></li>
        <li><button className="filter-btn" value="shakes" onClick={onClick}>shakes</button></li>
      </ul>
    </nav>
  );
};

export default Categories;
