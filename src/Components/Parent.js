import React, { Component } from 'react'; 
import Child from './Child' ; 

class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // Sending Data From parent to Child !! 
       nameOfParent : "mohamed",
       ageChild : 0 , 
    }
  }

  // Create a function to Change the state from child Data 
  functionAgeChild = (val) => {
    this.setState({ ageChild : val })
  }

  render() {
    return (
      <div>
        <h1>Parent</h1>
        <Child 
        getAgeFromChild = {(val)=> this.functionAgeChild(val)}
        nameOfParent = {this.state.nameOfParent} 
        />
      <p> My child have <strong>{this.state.ageChild}</strong> Years old </p> 
      </div>
    )
  }
}

export default Parent
