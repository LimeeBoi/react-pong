import { Component } from 'react';
import '../css/Game.css';
import Paddle from './Paddle';
import Ball from './Ball';

class Game extends Component {
  constructor(props) {
    super(props);
    this.moveFunc0 = () => {}; //funcs that will be replaced by a moving func that moves a child component up :]
    this.moveFunc1 = () => {}; // same ^; except moves component down
    this.colLine0 = () => {};
    this.colLine1 = () => {};
    this.state = {
      mounted: false, //react doesn't let u setState() when the component isn't mounted :[
      keysDown: [], // *self-explanetory*
      numIntervals: 0, // tells how many interval made
      textVal: 'hold on...', // info-box text value
      isReady: false,
    };
    
    setTimeout(() => { // Lets the interval below accelerate (for some reason that happens)
      window.addEventListener('keydown', (event) => { //listen for keys down
        const {moveFunc0, moveFunc1} = this;
        const {keysDown, numIntervals, mounted} = this.state;
        
        if (!keysDown.find(el => el === event.key)) keysDown.push(event.key); // push key detected to keysDown arr if key is not already in keysDown arr
          const keyListener = setInterval(function() { // made an interval so paddle movements look animated :)
            if (!keysDown || numIntervals > 3) clearInterval(keyListener); // prevents too many intervals existing and the paddles going lightspeed.
            moveFunc0(keysDown, ['w', 'e', 's', 'd']); // controls
            moveFunc1(keysDown, ['o', 'i', 'l', 'k']);
          }, 10);
          if (mounted) this.setState({numIntervals: numIntervals+1}); // says to everyone that an interval was born
      });
      window.addEventListener('keyup', (event) => {
        const {keysDown} = this.state;
        keysDown.splice(keysDown.indexOf(event.key), 1); // Remove keys from keysDown arr when the key is not down anymore.
      });
      setTimeout(() => {if (this.state.mounted) this.setState({
        textVal: 'Ready.',
        isReady: true,
      })}, 500);
    }, 500); 
  }

  componentDidMount() {
    setTimeout(() => { // annoying moundted detector so I don't have to deal with errors :]
      this.setState({mounted: true});
    });
  }

  // very satisfying string-to-variable-name thing
  // btw this function is for the child components to turn in their functions so we can us it from here.
  getFunc = (func, funcDest) => this[funcDest] = func;
  
  render() {
    setTimeout(() => console.table(this.colLine0(), this.colLine1()))
    return (
      <div className='game'> 
        <Paddle id='paddle0' getMoveFunc={this.getFunc} getCollisionLines={this.getFunc} /> 
        <Paddle id='paddle1' getMoveFunc={this.getFunc} getCollisionLines={this.getFunc} /> 
        <h2 className='game-text' onClick={() => {
          if (this.state.isReady) {
            this.setState({textVal: '3'});
            setTimeout(() => this.setState({textVal: '2'}), 1000)
            setTimeout(() => this.setState({textVal: '1'}), 2000);
            setTimeout(() => {
              this.setState({textVal: 'GO!'});
              this.goBall();
            }, 3000);
          }
        }}>{this.state.textVal}</h2>
        <Ball getGoBallFunc={this.getFunc} /> 
      </div>
    )
  }
};

export default Game;