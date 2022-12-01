import { useState } from "react";
import helpIco from './help.ico';

function Slider({ left, openTimeLength, handleClick }) {
  const [isOpen, setIsOpen] = useState(null); // *is open*
  const [yOffset, setYOffset] = useState(null); // keep track of the y val for the slider :>
  const [hbc, setHbc] = useState(null); // has been clicked
  return (
    <>
      <div className='slider-body' style={{ // yes
        left: left + .15 + '%',
        top: yOffset - 60 + 'px',
        animation: hbc ? `pull-${isOpen ? 'down' : 'up'}-slider-body ${openTimeLength}s ease` : null, // see if slider should be open or closed
      }}>
        <button onClick={handleClick}>
          Help
        </button>
      </div>
      <div className='slider-tab' onClick={() => {
        setIsOpen(!isOpen);
        setHbc(true);
        if (isOpen) setTimeout(() => {setYOffset(0)}, openTimeLength * 1000 - 20); // If the slider is clicked, toggle yOffset
        else setTimeout(() => {setYOffset(60)}, openTimeLength * 1000 - 20);
      }} style={{
        left: left + 2.88 + '%',
        top: yOffset + 'px',
        animation: hbc ? `pull-${isOpen ? 'down' : 'up'}-slider-tab ${openTimeLength}s ease` : null, // calculate what animation to 
      }}>
        <img className='slider-tab-icon' src={helpIco} alt='HELO'/>
      </div>
    </>
  )
};

export default Slider;