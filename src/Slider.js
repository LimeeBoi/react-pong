import { useState } from "react";
import arrow from './arrow.svg';

function Slider({ left }) {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className='slider' >
      <div className='slider-body' style={{
        display: 'block',
        backgroundColor: 'rgb(30, 30, 30)',
        borderBottomLeftRadius: '20%',
        borderBottomRightRadius: '20%',
        position: 'absolute',
        top: isOpen ? '0px' : '-60px',
        left: left + 0.75 + '%',
        width: '100px',
        height: '60px',
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