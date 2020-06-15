import React, {useState} from 'react';
import './App.css';
import Parent from './Components/Parent';
import VaC from './ValueContext';



function App() {
  let Vacc = useState(false);
  return (
    <VaC.Provider value = {Vacc}>
    <div className = "maindiv">
      <h1><strong>Turn on and off light</strong></h1>
      <br/>
      <Parent/>
    </div>
    </VaC.Provider>
  );
}

export default App;
