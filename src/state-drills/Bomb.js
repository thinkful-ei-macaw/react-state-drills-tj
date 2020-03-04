import React, { Component } from 'react';

export default class Bomb extends Component {
  state = {
    count : 0,
  }


handleButtonClick = () => {
 this.setState({ count: this.state.count + 1});
}




  render() {
    return (
      <div>
        <p>Tick</p>
      </div>
)
}

}