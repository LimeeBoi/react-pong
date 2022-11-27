import { Component } from 'react';

class Ball extends Component { // STILL MAKING THIS COMPONENT
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className='ball' style={{
        display: 'block',
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: '50%',
        height: '25px',
        width: '25px',
      }}/>
    )
  }
};

export default Ball;