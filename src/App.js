import React, { Component } from 'react';
import Nav from './components/nav/Nav'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Nav />
        <p>Never mind where are you from</p>
        <header className="App-header">
          <p>!1! Never mind where are you from</p>
          <h2>

          </h2>
          <img src={logo} class="App-logo" alt="logo" />

          <br />

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
}

export default App;
