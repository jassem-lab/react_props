import React, { Component } from 'react'

class input extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  getValuesFromInputText = (e)=>{
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <div>
        <input 
        name = "email"
        style={{width : 200}} 
        onChange = {this.getValuesFromInputText}
        />
        <br/>
        <strong>{this.state.email}</strong>
        <br/>
        <input 
        name = "tel"
        style={{width : 200}} 
        onChange = {this.getValuesFromInputText}
        />
        <br/>
        <strong>{this.state.tel}</strong>
      </div>
    )
  }
}

export default input
