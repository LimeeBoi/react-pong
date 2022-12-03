import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import '../App.css';
import Game from './Game';
import HelpPage from './HelpPage'
import Slider from './Slider';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <nav className='menu'>
              <Slider left={46} openTimeLength={.8} sliderBody={
                <>
                  <Link to='/Game' className='game-link'>Pong Game</Link>
                  <br/>
                  <Link to='/HelpPage' className='help-page-link'>Help Page</Link>
                  <br/>
                  <Link to='/' className='home-link'>Home</Link>
                </>
              }/>
              <Outlet className='app-outlet'/>
            </nav>
          </>
        }>
          <Route path='Game' element={<Game />} />
          <Route path='HelpPage' element={<HelpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App