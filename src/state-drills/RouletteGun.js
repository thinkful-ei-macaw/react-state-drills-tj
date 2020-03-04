import React, { Component } from 'react';

export default class RouletteGun extends Component {

  state = {
    chamber: null,
    spinningTheChamber: false,
  }

  bulletInChamber(props) {
    props = 8;
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    })

  this.timeout = setTimeout(() => {
    const newValue = Math.floor(Math.random() * 8 + 1)

    this.setState({chamber: newValue, spinningTheChamber: false,})
  }, 2000)
}

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }


  renderDisplay() {
    const { spinningTheChamber, chamber } = this.state
    const {bulletInChamber} = this.props
      if(spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
        }
    else if(chamber === bulletInChamber) {
      return 'BANG!!!!'
      
    }
    else {
      return `You're safe!`
    }
  }

  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>
          Pull the trigger!
         </button>
      </div>
    )
  }
}

