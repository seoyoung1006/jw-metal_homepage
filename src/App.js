import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Main from './Components/Main';
import Totop from './Components/Totop';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner></Banner>
        <Main></Main>
        <Totop></Totop>
      </div>
    );
  }
}

export default App;
