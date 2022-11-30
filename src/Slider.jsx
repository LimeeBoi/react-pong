import { useState } from "react";
import helpIco from './help.ico';

function Slider({ left, openTimeLength }) {
  const [isOpen, setIsOpen] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  return (
    <>
      <div className='slider-body'>
        <p style={{color: 'white'}} >idklol</p>
      </div>
      <div className='slider-tab' onClick={() => {
        setIsOpen(!isOpen);
        if (isOpen) setTimeout(() => {
          setYOffset(0);
        }, openTimeLength * 1000);
        else setTimeout(() => {setYOffset(60)}, openTimeLength * 1000);
      }} style={{
        left: left + 2.88 + '%',
        top: yOffset + 'px',
        animation: isOpen ? `pull-${isOpen ? 'down' : 'up'}-slider-tab ${openTimeLength}s ease` : '',
      }}>
        <img className='slider-tab-icon' src={helpIco} alt='helo' />
      </div>
    </>
  )
};

export default Slider;