import React from 'react';

class Paddle extends React.Component {
  constructor(props) {
    super(props);

    state = {
      mounted: false,
      yOffset: 0,
      delta: 10, // Step length
    }

    this.isMoving = false;
    window.addEventListener("keydown", event => {
      this.isMoving = true;
      switch (event.key) {
        case 'w': 
          this.setState({
            yOffset: this.state.yOffset - this.state.delta,
          })
          break;
        case 's': 
          this.setState({
            yOffset: this.state.yOffset + this.state.delta,
          })
          break;
        case 'o': 
          this.setState({
            yOffset: this.state.yOffset - this.state.delta,
          })
          break;
        case 'l': 
          this.setState({
            yOffset: this.state.yOffset + this.state.delta,
          })
          break;
        default: break;
      }
    });
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({mounted: true})
  //   }, 2000)
  // }

  move(where) {
    if (where) {
      this.setState({
        yOffset: this.state.yOffset - this.state.delta,
      })
    } else {
      this.setState({
        yOffset: this.state.yOffset + this.state.delta,
      })
    }
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