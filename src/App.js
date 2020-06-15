import React from 'react';
import './App.css';
import Parent from './Components/Parent';

function App() {
  return (
    <div className = "maindiv">
      <h1><strong>Increase or Decrease the Temprature</strong></h1>
      <br/>
      <Parent/>
    </div>
  );
}

export default App;
