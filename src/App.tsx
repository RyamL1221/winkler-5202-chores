import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [jacobAndRyan, setJacobAndRyan] = useState(0);
  const [raymondAndRohan, setRaymondAndRohan] = useState(1);
  const [bradyAndJack, setBradyAndJack] = useState(2);

  const chores = ["Bathroom cleaning (toilet & shower)", "Sink area cleaning", "Vacuum/Dusting/Tidying common room"];

  const rotateChores = () => {
    setJacobAndRyan((jacobAndRyan + 1) % chores.length);
    setRaymondAndRohan((raymondAndRohan + 1) % chores.length);
    setBradyAndJack((bradyAndJack + 1) % chores.length);
  };

  return (
    <div className="App">
      <h1>Jacob and Ryan: {chores[jacobAndRyan]}</h1>
      <h1>Raymond and Rohan: {chores[raymondAndRohan]}</h1>
      <h1>Brady and Jack: {chores[bradyAndJack]}</h1>
      <button id="rotate-chores-button" onClick={rotateChores}>Rotate Chores</button>
    </div>
  );
}

export default App;
