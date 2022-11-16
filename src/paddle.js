import React from 'react';

class Paddle extends React.Component {
  constructor(props) {
    super(props);
    this.props.getMoveFunc(this.move, this.props.id);

    this.state = {
      mounted: false,
      y: 0, // yPosition of paddle 
      delta: 40, // Step length
      fastDelta: 80, // Faster step length
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true}) // annoying mounting checker
    }, 2000)
  }

  move = (keyArr, keyBindArr) => { // keyBindArr: [moveUp, MoveQuicklyUp, moveDown, MoveQuicklyDown]
    const {y, delta, fastDelta} = this.state; 
    if (this.state.mounted) keyArr.map((key) => keyBindArr.map((keyBind, i) => {
      if (key === keyBind && this.state.mounted) switch (i) {
        case 0: this.setState({y: y - delta}); break;
        case 1: this.setState({y: y - fastDelta}); break;
        case 2: this.setState({y: y + delta}); break;
        case 3: this.setState({y: y + fastDelta}); break;
        default: break;
      }
      return null;
    }))
  }

  render() {
    return (
      <div className='Paddle' id={this.props.id} style={{
        display: 'block',
        position: 'absolute',
        backgroundColor: 'white', // erm... just plain css
        height: '80px',
        width: '15px',
        top: this.state.y + 'px', // PUT THE BIG SWITCH STATEMENT ABOVE TO USE
      }}/>
    )
  }
}

export default Paddle;