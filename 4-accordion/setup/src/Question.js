import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
  const [isUnfolded, setIsUnfolded] = useState(false);

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        {isUnfolded ? <AiOutlineMinus className="btn" onClick={() => setIsUnfolded(!isUnfolded)} /> : <AiOutlinePlus className="btn" onClick={() => setIsUnfolded(!isUnfolded)} />}
      </header>
      {isUnfolded && <p>{info}</p>}
    </div>
  );
};

export default Question;
