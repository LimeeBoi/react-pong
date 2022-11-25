import { Component } from 'react';
import Paddle from './Paddle';

class Game extends Component {
  constructor(props) {
    super(props);

    this.moveFunc0 = () => {};
    this.moveFunc1 = () => {};
    this.setInfoText = this.props.sendTextFunc;
    this.state = {
      mounted: false,
      keysDown: [],
    }
    
    setTimeout(() => {
      window.addEventListener('keydown', (event) => {
        const {moveFunc0, moveFunc1} = this;
        const keysDown = this.state.keysDown
        if (!keysDown.find(el => el === event.key)) keysDown.push(event.key);
        var listener = setInterval(function() {
          if (!keysDown) clearInterval(listener);
          moveFunc0(keysDown, ['w', 'e', 's', 'd']);
          moveFunc1(keysDown, ['o', 'i', 'l', 'k']);
        }, 10);
      });
      window.addEventListener('keyup', (event) => {
        const {keysDown} = this.state;
        keysDown.splice(keysDown.indexOf(event.key), 1);
      });
    }, 3000);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true});
    }, 2000);
  }

  getFunc = (func, funcDest) => {
    if (typeof func !== 'function') throw new Error('getFunc: first param not is not a function');
    else if (typeof funcDest !== 'string') throw new Error('getFunc: second param is not a string');
    else switch (funcDest) {
      case 'moveFunc0': 
        this.moveFunc0 = func;
        break;
      case 'moveFunc1':
        this.moveFunc1 = func;
        break;
      case 'setInfoText':
        this.setInfoText = func;
        break;
      default: break;
    }
  }

  render() {
    return (
      <div className='game'>
        <Paddle className='Paddle0' keysDown={this.state.keysDown}  getMoveFunc={this.getFunc} />
        <Paddle className='Paddle1' keysDown={this.state.keysDown}  getMoveFunc={this.getFunc} />
      </div>
    );
  }
};

export default Game;