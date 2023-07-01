import { Component } from 'react';

class Ball extends Component { // STILL MAKING THIS COMPONENT
  constructor(props) {
    super(props);
    this.state = { // in percent (x%, y%)
      y: 50,
      x: 49,
      angle: 45,
      mounted: false, 
      paddleWidth: setTimeout(() => this.props.paddleDims.width, 50), // Get paddle's width...
      paddleHeight: setTimeout(() => this.props.paddleDims.height, 50), // and height
    }
  }

  componentDidMount = () => { // I hate this so much that my brain decided it would be better to just not care about it
    setTimeout(() => { // well I'll copy n paste this from now on :]
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