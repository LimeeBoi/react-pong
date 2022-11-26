import { useState } from 'react';

function InfoBox({ getTextFunc }) {
  const [textVal, setTextVal] = useState('Hold on...');
  getTextFunc(text => {
    setTextVal(text);
  });
  
  return (<h2 className='info-box-text'>{textVal}</h2>);
}

export default InfoBox;