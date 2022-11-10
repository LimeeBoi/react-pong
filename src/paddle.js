import React from 'react';

class Paddle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      yOffset: 0,
      delta: 40, // Step length
      fastDelta: 80, // Faster step length
      keys: {}
    }

    window.addEventListener("keydown", event => {
      const yOffset = this.state.yOffset;
      if (this.state.mounted) switch (event.key) {
        case this.props.keyUp: // Listen for the key that will move up this paddle
          if (yOffset > 0) this.setState({yOffset: yOffset - this.state.delta});
          break;
        case this.props.fastKeyUp: // Listen for key to move up quickly
          if (yOffset > 0) this.setState({yOffset: yOffset - this.state.fastDelta});
          break;
        case this.props.keyDown: // Listen for the key that will move this paddle down
          if (yOffset < 720) this.setState({yOffset: yOffset + this.state.delta});
          break;
        case this.props.fastKeyDown:
          if (yOffset < 720) this.setState({yOffset: yOffset + this.state.fastDelta});
          break;
        default: break;
      }
      console.log(event.key);
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true})
    }, 2000)
  }

  render() {
    return (
      <div className='Paddle' id={this.props.id} style={{
        display: 'block',
        position: 'absolute',
        backgroundColor: 'white',
        height: '80px',
        width: '15px',
        top: this.state.yOffset + 'px',
      }}/>
    )
  }
}

export default Paddle;
