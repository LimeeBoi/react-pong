import React, { Component } from 'react';

class Paddle extends Component {
  constructor(props) {
    super(props);
    this.props.getMoveFunc(this.move, this.props.id === 'paddle0' ? 'moveFunc0' : 'moveFunc1'); // Give our move func to the Game component.
    //this.colissionLine =

    this.state = {
      mounted: false,
      y: 350, // yPosition of paddle 
      delta: 1.2, // Step length
      fastDelta: 2, // Faster step length
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true}) // annoying mounting checker
    }, 500);
  }

  move = (keyArr, keyBindArr) => { // keyBindArr: [moveUp, MoveQuicklyUp, moveDown, MoveQuicklyDown]
    const {y, delta, fastDelta} = this.state; 
    if (this.state.mounted) for (let i=0; i<keyArr.length; i++) for (let j=0; j<keyBindArr.length; j++) {
      if (keyArr[i] === keyBindArr[j] && this.state.mounted) {
        switch (j) { // Converts key (on keyboard) instuctions and implements them into movements.
          case 0: if (y > 0) this.setState({y: y - delta}); break;
          case 1: if (y > 0) this.setState({y: y - fastDelta}); break;
          case 2: if (y < 690) this.setState({y: y + delta}); break;
          case 3: if (y < 690) this.setState({y: y + fastDelta}); break;
          default: break;
        }
      }
    }
  }

  render() { //                                                 Let the paddle MOVE  \/
    return <div id={this.props.id} className='paddle' ref={this.props.ref} style={{top: this.state.y + 'px'}}/>
  }
}

export default Paddle;