import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Sum = () => {
  let n = 4;
  let m = 5;
  let sum = n + m;
  return sum;
}

const Ibra = {
  name: "IbraMun",
  last: "Tadeuш"
}

function searchIbra() {
  return `We love ${Ibra.name}, but never forgot his lastname ${Ibra.last}`;
}

const App = function dfrp() {
  const aram = <p>Dou Go</p>;
  const sum = 56 - 46;
  return (
    <div className="App" >
      <p>Never mind where are you from</p>
      <header className="App-header">
        <p>!1! Never mind where are you from</p>
        <h2>
          {searchIbra()}
        </h2>
        <img src={logo} class="App-logo" alt="logo" />
        {sum}
        {aram}
        <br />
        <Sum />
        <p>
          Edit code <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
