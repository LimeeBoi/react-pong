import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
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
              <Slider left={45.5} openTimeLength={.8} sliderBody={
                <>
                  <Link to='/Game' className='game-link'>Pong</Link>
                  <Link to='/HelpPage' className='help-page-link'>help</Link>
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