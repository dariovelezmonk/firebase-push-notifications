import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ButtonComponent} from "./ButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent />
      </header>
    </div>
  );
}

export default App;
