import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import '../css/App.css';
import Game from './Game';
import Slider from './Slider';
import HelpPage from './HelpPage'
import Home from './Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
                <Slider left={45} openTimeLength={.8} sliderBody={
                  <>
                    <Link to='/Game' className='game-link'>Pong Game</Link>
                    <br/>
                    <Link to='/HelpPage' className='help-page-link'>Help Page</Link>
                    <br/>
                    <Link to='/' className='home-link'>Home</Link>
                  </>
                }/> 
                <Outlet className='app-outlet'/>
            </>
          }>
            <Route path='Game' element={<Game />} />
            <Route path='HelpPage' element={<HelpPage />} />
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App