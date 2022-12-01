import { Component } from 'react';
import './App.css';
import Game from './Game';
import InfoBox from './InfoBox';
import Slider from './Slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.setText = () => {};
    this.callHelpPage = () => {};
    this.state = {
      isMounted: false,
      isSetTextReady: false, 
    };

    let isvrListener = setInterval(() => { //is setText ready listener: see if InfoBox component sent func back up
      if (this.setText && this.state.isMounted) {
        this.setState({isSetTextReady: true});
        clearInterval(isvrListener); 
      }
    }, 20);
  }

  getFunc = (func, funcDest ) => {
    if (typeof func !== 'function') throw new Error('getFunc: param not function');
    else switch (funcDest) {
      case 'setTextVal': 
        this.setText = func;
        break
      default: break;
    }
  }

  componentDidMount() {
    this.setState({isMounted: true}); // Tell this component if its mounted
  }

  render() {
    return this.state.isSetTextReady ? (
      <div className='App'>
        <InfoBox getTextFunc={this.getFunc} /> {/* If InfoBox is ready! */}
        <Game setText={this.setText} />
        <Slider left={45.5} openTimeLength={.8} callHelpPage={console.log('halp')}/>
      </div>
    ) : (
      <div className='App'>
        <InfoBox getTextFunc={this.getFunc} /> {/* Or not */}
        <Slider left={45.5} openTimeLength={.8}/>
      </div>
    );
  }
};

export default App;
