import { Component } from 'react';
import './App.css';
import Game from './Game';
import InfoBox from './InfoBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.sendVal = () => {};
    this.state = {
      isMounted: false,
      isSendValReady: false,
    };

    let isvrListener = setInterval(() => { //is sendval ready listener 
      if (this.sendVal && this.state.isMounted) {
        this.setState({isSendValReady: true});
        clearInterval(isvrListener);
      }
    }, 20);
  }

  getFunc = (func) => {
    if (typeof func !== 'function') throw new Error('getFunc: param not function');
    else this.sendVal = func;
  }

  componentDidMount() {
    this.setState({isMounted: true});
  }

  render() {
    return this.state.isSendValReady ? (
      <div className='App'>
        <InfoBox getTextFunc={this.getFunc} />
        <Game sendTextFunc={this.sendVal} />
      </div>
    ) : (
      <div className='App'>
        <InfoBox getTextFunc={this.getFunc} />
      </div>
    );
  }
};

export default App;
