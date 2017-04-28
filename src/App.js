import React, { Component } from 'react';
import About from './About';
import Album from './Album';
import Home from './Home';
import './App.css';

class App extends Component {

  constructor () {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App
