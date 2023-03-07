import React, { Component } from 'react';
import Banner from './Components/Banner';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, React!!!
        <Banner></Banner>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
