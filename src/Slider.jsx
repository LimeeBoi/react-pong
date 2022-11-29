import { useState } from "react";
import arrow from './arrow.svg';
import { RouteProvider, createBrowserRouter, Route } from 'react-router-dom';

function Slider({ left }) {
  const [isOpen, setIsOpen] = useState(0);
  const helpPage = createBrowserRouter([
    {
      path: '/',
      element: <div>yeet</div>, 
    },
  ]);

  return (
    <div className='slider' >
      <div className='slider-body' style={{
        top: isOpen ? '0px' : '-60px',
        left: left + 0.75 + '%',
      }}>
        <a href='helloSorryThereIsNoHelpButtonImStillWorkingOnIt' onClick={() => {document.write('nope')}} style={{
          position: 'relative',
          left: (left - 17) + '%', 
          top: 27 + '%',
        }}>HELP</a>
      </div>
      <div className='slider-tab' onClick={() => {setIsOpen(!isOpen)}} style={{
        
        top: isOpen ? '60px' : '0px',
        left: left + 2.88 + '%',
        
      }}><img className='slider-tab-icon' src={arrow} alt='helo' /></div>
    </div>
  )
};

export default Slider;