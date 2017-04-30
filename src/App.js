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
    super();
    this.state = {
      albumArray: [

        {travel: [
          {img:'https://images.unsplash.com/photo-1490108661355-933af4ee68a1?dpr=2&auto=format&fit=crop&w=1500&h=987&q=80&cs=tinysrgb&crop=&bg=', name:'above the trees'},
          {img:'https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?dpr=2&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=&bg=', name:'in the trees'},
          {img:'https://images.unsplash.com/photo-1492136344046-866c85e0bf04?dpr=2&auto=format&fit=crop&w=1500&h=1008&q=80&cs=tinysrgb&crop=&bg=', name:'towering'},
          {img:'https://images.unsplash.com/photo-1484580283400-988a2e194a54?dpr=2&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=&bg=', name:'what time did you say'},
          {img:'https://images.unsplash.com/photo-1438434259782-950902eeb1ed?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=',  name:'peace'},
          {img:'https://images.unsplash.com/photo-1480934297049-bab76594f271?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=', name:'wall'}
        ]},

        {birds: [
          {img:'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=2&auto=format&fit=crop&w=1500&h=1941&q=80&cs=tinysrgb&crop=&bg=', name:'i see you'},
          {img:'https://images.unsplash.com/photo-1490718720478-364a07a997cd?dpr=2&auto=format&fit=crop&w=1500&h=2254&q=80&cs=tinysrgb&crop=&bg=', name:'hello'},
          {img:'https://images.unsplash.com/photo-1480928591476-bca930016dcd?dpr=2&auto=format&fit=crop&w=1500&h=1070&q=80&cs=tinysrgb&crop=&bg=', name:'not one to gossip, but'},
          {img:'https://images.unsplash.com/photo-1492015330372-f56846dcd2a3?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=', name:'shy'},
          {img:'https://images.unsplash.com/photo-1482761834750-f7ae415c685b?dpr=2&auto=format&fit=crop&w=1500&h=997&q=80&cs=tinysrgb&crop=&bg=', name:'for the birds'},
          {img:'https://images.unsplash.com/photo-1471602671180-19fb2b491359?dpr=2&auto=format&fit=crop&w=1500&h=2307&q=80&cs=tinysrgb&crop=&bg=', name:'yes'}
        ]},

        {camera: [
          {img:'https://images.unsplash.com/uploads/1411074708175ba26fea4/498d4c3a?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=', name:'rose'},
          {img:'https://images.unsplash.com/photo-1487253096619-4ab6f24d5bbe?dpr=2&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop=&bg=', name:'fish'},
          {img:'https://images.unsplash.com/photo-1492145541977-05a012534431?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=', name:'horizon'},
          {img:'https://images.unsplash.com/reserve/YyOKl7NKQYWBwgdBfrAG_oqbFCyM.jpg?dpr=2&auto=format&fit=crop&w=1500&h=997&q=80&cs=tinysrgb&crop=&bg=', name:'this view though'},
          {img:'https://images.unsplash.com/photo-1481762554390-ff5562748bdf?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=', name:'ig worthy'},
          {img:'https://images.unsplash.com/photo-1491796014055-e6835cdcd4c6?dpr=2&auto=format&fit=crop&w=1500&h=1821&q=80&cs=tinysrgb&crop=&bg=', name:'pier'}
        ]},

        {water:[
          {img:'https://images.unsplash.com/photo-1490889838033-0367ce19ba30?dpr=2&auto=format&fit=crop&w=1500&h=1140&q=80&cs=tinysrgb&crop=&bg=', name:'above'},
          {img:'https://images.unsplash.com/photo-1490093627325-8f63b35c9e6d?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=', name:'tour'},
          {img:'https://images.unsplash.com/photo-1443181844940-9042ec79924b?dpr=2&auto=format&fit=crop&w=1500&h=1499&q=80&cs=tinysrgb&crop=&bg=', name:'lets go'},
          {img:'https://images.unsplash.com/photo-1472431242674-6268a48cdc2e?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=', name:'toe jams'},
          {img:'https://images.unsplash.com/photo-1465310477141-6fb93167a273?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=', name:'my view'},
          {img:'https://images.unsplash.com/photo-1473849512542-60ddc51e1c9f?dpr=2&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop=&bg=', name:'dude'}
        ]}
      ]
  }
}

  render() {
    return (
      <Router>
        <div>
          <div className="header">Photos</div>
        <Route exact path="/" component={Home}/>
        <Route path="/Album/:albumId" render={(pickles) => <Album albumSet = {this.state.albumArray} {...pickles} />}/>
        <Route path="/Photo/:photoId" component={Photo}/>
        </div>
      </Router>
    );
  }
}

export default App
