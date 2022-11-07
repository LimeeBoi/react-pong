import React from 'react';

class Paddle extends React.Component {
  constructor(props) {
    super(props);

    this.paddle0 = document.getElementById('Paddle0');
    this.paddle1 = document.getElementById('Paddle1');

    this.isMoving = false;
    window.addEventListener("keydown", event => {
      this.isMoving = true;
      switch (event.key) {
        case 'w': 
          this.move(this.paddle0); 
          break;
        case 's': 
          this.move(this.paddle0); 
          break;
        case 'o': 
          this.move(this.paddle1); 
          break;
        case 'l': 
          this.move(this.paddle1); 
          break;
        default: break;
      }
    });
    window.addEventListener("keyup", event => {
      switch (event.key) {
        case 'w': 
        case 's': 
          this.move(this.paddle0, 1);
          break;
        case 'o':
        case 'l':
          this.move(this.paddle1, 1);
          break;
        default: break;
      }
    })
  }

  move(what, stop, where) {
    if (stop) {
      //stop what
    } else if (where) {
      //what go up
    } else {
      //what go down
    }
  }

  render() {
    return (<div className='Paddle' id={this.props.id} style={{
      display: 'block',
      position: 'absolute',
      backgroundColor: 'white',
      height: '80px',
      width: '15px',
    }}/>)
  }
}

export default Paddle;