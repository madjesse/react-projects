import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${rgbToHex(...rgb )}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert]);

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={handleClick}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}

export default SingleColor;
