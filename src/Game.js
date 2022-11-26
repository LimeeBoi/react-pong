import { Component } from 'react';
import Paddle from './Paddle';
import Ball from './Ball';

class Game extends Component {
  constructor(props) {
    super(props);

    this.moveFunc0 = () => {}; //funcs that will be replaced by a moving func that moves a child component up :]
    this.moveFunc1 = () => {}; // same ^; except moves component down
    this.state = {
      mounted: false, //react doesn't let u setState() when the component isn't mounted :[
      keysDown: [], // *self-explanetory*
    };
    
    setTimeout(() => {
      this.props.setText('Go!');
      window.addEventListener('keydown', (event) => { //listen for keys down
        const {moveFunc0, moveFunc1} = this;
        const {keysDown} = this.state;
        if (!keysDown.find(el => el === event.key)) keysDown.push(event.key);
        var keyListener = setInterval(function() {
          if (!keysDown) clearInterval(keyListener);
          moveFunc0(keysDown, ['w', 'e', 's', 'd']);
          moveFunc1(keysDown, ['o', 'i', 'l', 'k']);
        }, 10);
      });
      window.addEventListener('keyup', (event) => {
        const {keysDown} = this.state;
        keysDown.splice(keysDown.indexOf(event.key), 1);
      });
    }, 4000);
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
        <Ball />
      </div>
    );
  }
};

export default Game;