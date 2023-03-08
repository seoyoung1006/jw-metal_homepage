import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Main from './Components/Main';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner></Banner>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
