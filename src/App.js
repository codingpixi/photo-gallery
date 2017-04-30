import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './About';
import Album from './Album';
import Photo from './Photo'
import Home from './Home';
import './App.css';

// use this when including a constructor
class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div>
          <div className="header">Photos</div>
        <Route exact path="/" component={Home}/>
        <Route path="/Album/:albumId" component={Album}/>
        <Route path="/Photo/:photoId" component={Photo}/>
        </div>
      </Router>
    );
  }
}

export default App
