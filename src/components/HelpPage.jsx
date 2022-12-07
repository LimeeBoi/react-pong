import '../HelpPage.css';

function HelpPage() {
  return (
    <div className='help-page'>
      <h1 className='hp-title' >React Games Help Page</h1>
      <h2 className='hp-pong-header'>
        Pong
        <div className='hp-pong-parag'>
          This is a Pong game made with react  :` <br /> <br />
          How to move the paddles:
          <ul>
            <li>Hold down 'w' to move the left paddle up</li>
            <li>Hold down 'e' to move the left paddle up quickly</li>
            <li>Hold down 's' to move the left paddle down</li>
            <li>Hold down 'd' to move the left paddle down quckly</li>
            <li>And so on for the right paddle: o = up, l = down, i = quick up, k = quick down</li>
          </ul>
          How to start the game: <br />
          All you have to do to start the game of pong is to click the box on the botton of the page that says 'ready'.
        </div>
      </h2>
    </div>
  )
}

export default HelpPage;