import React, { Component } from 'react';
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
// import Literature from './components/literature/Literature'
import ArticleList from './components/History/ArticleList'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
import about from './components/History/about'
import book from "./components/literature/book";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Navigation />
        <ArticleList about={about} />
        {/* <Literature bk={book} /> */}
        <Contact />
        <Footer />

      </div>
    );
  }
}

export default App;
