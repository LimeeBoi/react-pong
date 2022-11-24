import { useState } from 'react';

function InfoBox({ getTextFunc }) {
  const [textVal, setTextVal] = useState('helo');
  setTimeout(() => {
    getTextFunc(text => {
      setTextVal(text);
    })
  }, 10);
  window.addEventListener('click', () => {
    console.log('textVal:', textVal);
  });
  
  return (<h2 className='info-box-text'>{textVal}</h2>);
};

export default InfoBox;