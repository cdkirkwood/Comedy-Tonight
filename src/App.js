import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Routes from './Routes';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;