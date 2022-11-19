import { Component } from "react";

class InfoBox extends Component {
  constructor(props) {
    super(props);
    this.props.getTextFunc((text) => {
      this.setState({textVal: text});
    });

    this.state = {
      textVal: null,
    };

    window.addEventListener('click', () => {
      console.log("textVal:", this.state.textVal);
    });
  }

  render() {
    return <h2 className='info-box-text'>{this.state.textVal}</h2>
  }
};

export default InfoBox;