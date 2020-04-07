import React from 'react';
import './App.css';
import Parent from './Components/Parent'; 
import Input from './Components/input' ; 



function App() {
  return (
    <div className="App">
      <div>
      <h1>React props : </h1>
      <Parent/> 
      </div>
      <div>
        <h1>Bringing Values from Inputs : </h1>
        <Input />
      </div>
    </div>
  );
}

export default App;
