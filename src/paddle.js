import React from 'react';

class Paddle extends React.Component {
  constructor(props) {
    super(props);
    this.props.moveFunc(this.move);

    this.state = {
      mounted: false,
      yOffset: 0,
      delta: 40, // Step length
      fastDelta: 80, // Faster step length
      keysDown: this.props.keysDown, // *keys down*
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true}) // annoying mounting checker
    }, 2000)
  }

  move(moveCode) { // up (1) or down (0) -> xx <- fast (1) or not (0)
    const yOffset = this.state.yOffset;
    if (this.state.mounted) switch (moveCode) {
      case 10: // Listen for key that will move up this paddle
        if (yOffset > 0) this.setState({yOffset: yOffset - this.state.delta});
        break;
      case 11: // Listen for key to move up quickly
        if (yOffset > 0) this.setState({yOffset: yOffset - this.state.fastDelta});
        break;
      case 0: // Listen for  key that will move this paddle down
        if (yOffset < 720) this.setState({yOffset: yOffset + this.state.delta});
        break;
      case 1: // Listen for key to move down quickly
        if (yOffset < 720) this.setState({yOffset: yOffset + this.state.fastDelta});
        break;
      default: break; // lol useless default case
    }
  }

  render() {
    return (
      <div className='Paddle' id={this.props.id} style={{
        display: 'block',
        position: 'absolute',
        backgroundColor: 'white', // erm... just plain css
        height: '80px',
        width: '15px',
        top: this.state.yOffset + 'px', // PUT THE BIG SWITCH STATEMENT ABOVE TO USE
      }}/>
    )
  }
}

export default Paddle;
