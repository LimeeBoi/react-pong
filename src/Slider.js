import { useState } from "react";

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
        left: left + '%',
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
        display: 'block',
        color: 'lightgrey',
        backgroundColor: 'rgb(30, 30, 30)',
        textAlign: 'center',
        borderBottomLeftRadius: '20%',
        borderBottomRightRadius: '20%',
        position: 'absolute',
        top: isOpen ? '60px' : '0px',
        left: left + 2.88 + '%',
        width: '40px',
        height: '15px',
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, monospace',
      }}>v</div>
    </div>
  )
};

export default Slider;