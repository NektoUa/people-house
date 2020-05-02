import React, { Component } from 'react';
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation';
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
import Arrow from './components/arrow/Arrow'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Navigation />
        <Contact />
        <Footer />
        <Arrow />
      </div>
    );
  }
}

export default App;
