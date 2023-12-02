import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/BigText.css'

function BigText({text}) {
  return (
    <div className='midHeading marginTopBottom-7px'>
      {text}
    </div >
  );
}

export default BigText;