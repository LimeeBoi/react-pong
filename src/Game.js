import React from 'react';
import Paddle from './Paddle';

class Game extends React.Component {
  constructor(props) {
    super(props);

    window.addEventListener('keydown', (event) => {
      const {keysDown, moveFunc0, moveFunc1} = this.state;
      keysDown.push(event.key);
      moveFunc0(keysDown, ['w', 'e', 's', 'd']);
      moveFunc1(keysDown, ['o', 'l', 'i', 'k']);
    });
    window.addEventListener('keyup', (event) => {
      const {keysDown} = this.state;
      keysDown.splice(keysDown.indexOf(event.key), 1);
    });

    this.state = {
      mounted: false,
      keysDown: [],
      moveFunc0: () => {},
      moveFunc1: () => {},
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true});
    }, 2000);
  }

  getFunc = (inFunc, id) => {
    if (typeof inFunc !== 'function') throw new Error('getFunc: param not is not a function');
    else if (typeof id !== 'string') throw new Error('getFunc: id param is not a string');
    else if (id === 'Paddle0') this.setState({moveFunc0: inFunc});
    else if (id === 'Paddle1') this.setState({moveFunc1: inFunc})
  }

  render() {
    return (
      <div className='game'>
        <Paddle id='Paddle0' keysDown={this.state.keysDown}  getMoveFunc={this.getFunc} />
        <Paddle id='Paddle1' keysDown={this.state.keysDown}  getMoveFunc={this.getFunc} />
      </div>
    );
  }
};

export default Game;