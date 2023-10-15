import { Component } from 'react';

class Ball extends Component { // STILL MAKING THIS COMPONENT
  constructor(props) {
    super(props);
    this.state = { // position in percent (x%, y%)
      y: 50,
      x: 49,
      direction: 0, // 0 is to top-right, 1 is to bottom-right, 2 is to bottom-left, and 3 is to top-left
      mounted: false, 
      isGoing: this.props.isGoing,
      paddleWidth: setTimeout(() => this.props.paddleDims.width, 50), // Get paddle's width... btw dims is short for dimensions
      paddleHeight: setTimeout(() => this.props.paddleDims.height, 50), // and height
    }
  }

  componentDidMount = () => { // I hate this so much that my brain decided it would be better to just not care about it
    setTimeout(() => { // well I'll copy n paste this from now on :]
      this.setState({mounted: true});
    }, 500);
  }
  
  render() {
    if (this.state.isGoing) console.log('eee');
    return (
      <div className='ball' style={{
        top: this.state.y + '%',
        left: this.state.x + '%',
      }}/>
    )
  }
};

export default Ball;