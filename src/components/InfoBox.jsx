import { useState } from 'react';

function InfoBox({ getTextFunc }) {
  const [textVal, setTextVal] = useState('Hold on...'); // Text state declaration
  getTextFunc(text => { // Give func to App Component
    setTextVal(text); 
  }, 'setTextVal');
  
  return (<h2 className='info-box-text' onClick={() => {
    if (textVal === 'Ready.') setTimeout(() => {
      setTextVal(3);
      setTimeout(() => {
        setTextVal(2);
        setTimeout(() => {
          setTextVal(1);
          setTimeout(() => {
            setTextVal('Go!');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }} >{textVal}</h2>); // Render text
}

export default InfoBox;