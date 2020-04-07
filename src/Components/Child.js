import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // Sending Data From Child to Parent !! 
         age : 23 
    }
  }
  sendAgeToParent = () => {
    this.props.getAgeFromChild(this.state.age) 
  }

  render() {
    return (
      <div>
        My name is Salah ben {this.props.nameOfParent}
        <br/>
        <button 
        className="btn btn-primary" 
        onClick={this.sendAgeToParent}>
          Let my daddy know my Age
          </button>
      </div>
    )
  }
}

export default Child
