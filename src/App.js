import './App.css';
import Paddle from './Paddle';

function App() {
  return (
    <div className="App">
      <Paddle id='Paddle0' keyUp='w' fastKeyUp='e' keyDown='s' fastKeyDown='d' />
      <Paddle id='Paddle1' keyUp='o' fastKeyUp='i' keyDown='l' fastKeyDown='k' />
      <h2 style={{color: 'white'}}>door</h2>
    </div>
  );
}

export default App;
