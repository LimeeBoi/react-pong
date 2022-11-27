import { useState } from "react";

function Slider({ left }) {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div >
      <div className='slider-body' style={{
        display: 'block',
        backgroundColor: 'rgb(30, 30, 30)',
        borderRadius: '20%',
        position: 'absolute',
        top: isOpen ? '0px' : '-60px',
        left: left + 'px',
        width: '90px',
        height: '60px',
      }}>
        <p style={{
          color: 'blue',
          position: 'relative',
          textAlign: 'center',
        }}>coming soon</p>
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
        left: left + 25 + 'px',
        width: '40px',
        height: '15px',
      }}>v</div>
    </div>
  )
};

export default Slider;