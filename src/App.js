import { Component } from 'react';
import './App.css';
import Game from './Game';
import InfoBox from './InfoBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.sendVal = null;
  }

  getFunc = (func) => {
    if (typeof func !== 'function') throw new Error('getFunc: param not function');
    else this.sendVal = func;
    console.log(this.sendVal) ;
  }

  render() {
    return (
      <div className="App">
        <InfoBox getTextFunc={this.getFunc} />
        <Game sendTextFunc={this.sendVal} />
      </div>
    );
  }
};

export default App;
