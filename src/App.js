import React, {Component} from 'react';
import albumArray from './data';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './About';
import Album from './Album';
import Photo from './Photo';
import Home from './Home';
import './App.css';

// use this when including a constructor
class App extends Component {

  constructor() {
    super();
    this.state = {
      albumArray
    }
  }

  render() {
    return (
      <Router>
        <div>
          <div className="header">dw gallery</div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Album/:albumId" render={(pickles) => <Album albumSet = {this.state.albumArray} {...pickles} />}/>
        <Route path="/Album/:albumId/Photo/:photoId" component={Photo}/>
        </div>
      </Router>
    );
  }
}

export default App;
