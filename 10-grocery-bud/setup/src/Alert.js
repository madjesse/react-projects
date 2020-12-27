import React, { useEffect } from 'react'

const Alert = ({msg, type, handleAlert, list}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  );
}

export default Alert
