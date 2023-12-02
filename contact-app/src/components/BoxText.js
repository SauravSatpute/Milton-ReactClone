import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/BoxText.css'

function BoxText({text, bgColor}) {
  return (
    <div >
      <div className='box-text ' style={{background: bgColor}}>
            {text}
      </div>
    </div >
  );
}

export default BoxText;