import { useState } from 'react';

function InfoBox({ getTextFunc }) {
  const [textVal, setTextVal] = useState('Hold on...'); // Text state declaration
  getTextFunc(text => { // Give func to App Component
    setTextVal(text); 
  });
  
  return (<h2 className='info-box-text'>{textVal}</h2>); // Render text
}

export default InfoBox;