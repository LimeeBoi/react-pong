import { Component } from 'react';

class Ball extends Component { // STILL MAKING THIS COMPONENT
  constructor(props) {
    super(props);
    this.state = { // in percent (x%, y%)
      y: 50,
      x: 49,
      angle: 45,
      mounted: false, 
      paddleWidth: setTimeout(() => this.props.paddleStyle.width, 50), // Get paddle's height...
      paddleHeight: setTimeout(() => this.props.paddleStyle.height, 50), // and height
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({mounted: true});
    }, 500);
  }

  render() {
    return (
      <div className='ball' style={{
        top: this.state.y + '%',
        left: this.state.x + '%',
      }}/>
    )
  }
};

export default Ball;