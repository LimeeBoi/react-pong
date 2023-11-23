import { Component } from 'react';

class Ball extends Component { // STILL MAKING THIS COMPONENT
  constructor(props) {
    super(props);
    this.props.getGoBallFunc(this.goBall, 'goBall');
    this.state = { // position in percent (x%, y%)
      y: 50, // positions
      x: 49,
      direction: 0, // 0 is to top-right, 1 is to bottom-right, 2 is to bottom-left, and 3 is to top-left
      mounted: false, // mounted or not
      isGo: false,
    }
  }

  componentDidMount = () => { // I hate this so much that my brain decided it would be better to just not care about it
    setTimeout(() => { // well I'll copy n paste this from now on :]
      this.setState({mounted: true});
    });
  }

  goBall = () => this.setState({isGo: true});
  // let tha ball know that it can now go weeee
  
  render() {
    if (this.state.isGo) console.log('e')
    return (
      <div className='ball' style={{
        top: this.state.y + '%',
        left: this.state.x + '%',
      }}/>
    )
  }
};

export default Ball;