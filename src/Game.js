import React from 'react';
import Paddle from './Paddle';

class Game extends React.Component {
  constructor(props) {
    super(props);

    window.addEventListener('keydown', (event) => {
      const {keysDown} = this.state;
      keysDown.push(event.key);
    });
    window.addEventListener('keyup', (event) => {
      const {keysDown} = this.state;
      keysDown.splice(keysDown.indexOf(event.key), 1);
    });

    this.state = {
      mounted: false,
      keysDown: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true});
    }, 2000)
  }

  getFunc(inFunc) {
    if (typeof inFunc !== 'function') throw new Error('getFunc: param not is not a function');
    else {
      this.moveFunc = inFunc;
    }
  }

  render() {
    return (
      <div className='game'>
        <Paddle id='Paddle0' keysDown={this.state.keysDown} moveFunc={this.getFunc} />
        <Paddle id='Paddle1' keysDown={this.state.keysDown} moveFunc={this.getFunc}/>
      </div>
    )
  }
}

export default Game;