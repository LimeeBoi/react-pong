import { Component } from 'react';
import './App.css';
import Game from './Game';
import InfoBox from './InfoBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.setText = () => {};
    this.state = {
      isMounted: false,
      isSetTextReady: false,
    };

    let isvrListener = setInterval(() => { //is setText ready listener 
      if (this.setText && this.state.isMounted) {
        this.setState({isSetTextReady: true});
        clearInterval(isvrListener);
      }
    }, 20);
  }

  getFunc = (func) => {
    if (typeof func !== 'function') throw new Error('getFunc: param not function');
    else this.setText = func;
  }

  componentDidMount() {
    this.setState({isMounted: true});
  }

  render() {
    return this.state.isSetTextReady ? (
      <div className='App'>
        <InfoBox getTextFunc={this.getFunc} />
        <Game setText={this.setText} />
      </div>
    ) : (
      <div className='App'>
        <InfoBox getTextFunc={this.getFunc} />
      </div>
    );
  }
};

export default App;
