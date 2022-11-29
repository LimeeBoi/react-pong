import React from 'react';

class Paddle extends React.Component {
  constructor(props) {
    super(props);
    this.props.getMoveFunc(this.move, this.props.className === 'Paddle0' ? 'moveFunc0' : 'moveFunc1'); // Give our move func to the Game component.
    //this.colissionLine =

    this.state = {
      mounted: false,
      y: 350, // yPosition of paddle 
      delta: 1, // Step length
      fastDelta: 1.8, // Faster step length
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true}) // annoying mounting checker
    }, 2000);
  }

  move = (keyArr, keyBindArr) => { // keyBindArr: [moveUp, MoveQuicklyUp, moveDown, MoveQuicklyDown]
    const {y, delta, fastDelta} = this.state; 
    if (this.state.mounted) for (let i=0; i<keyArr.length; i++) for (let j=0; j<keyBindArr.length; j++) {
      if (keyArr[i] === keyBindArr[j] && this.state.mounted) switch (j) { // Converts key (on keyboard) instuctions and implements them into movements.
        case 0: if (y > 0) this.setState({y: y - delta}); break;
        case 1: if (y > 0) this.setState({y: y - fastDelta}); break;
        case 2: if (y < 690) this.setState({y: y + delta}); break;
        case 3: if (y < 690) this.setState({y: y + fastDelta}); break;
        default: break;
      }
    }
  }

  render() {
    return (
      <div className={this.props.className} style={{ // Classic paddle CSS :>
        display: 'block',
        position: 'absolute',
        backgroundColor: 'white', // erm... just plain css
        height: '100px',
        width: '17px',
        top: this.state.y + 'px', // PUT THE BIG SWITCH STATEMENT ABOVE TO USE
      }}/>
    );
  }
}

export default Paddle;