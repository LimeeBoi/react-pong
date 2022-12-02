import { Link, Outlet } from 'react-router-dom';
function Menu() {

  return (
    <nav className='menu'>
      <Link to='/components/App'>Pong</Link>
      <Link to='/routes/HelpPage'>help</Link>

      <Outlet />
    </nav>
  )
}

export default Menu