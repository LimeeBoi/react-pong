import { Component } from 'react';

class Ball extends Component { // STILL MAKING THIS COMPONENT
  constructor(props) {
    super(props);
    this.state = { // in percent (x%, y%)
      y: 50,
      x: 49,
      angle: 45,
      paddleWidth: setTimeout(() => this.props.paddleStyle.width, 500),
    }
  }

  render() {
    return (
      <div className='ball' ref='ball' style={{
        top: this.state.y + '%',
        left: this.state.x + '%',
      }}/>
    )
  }
};

export default Ball;