import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//shortcut when no constructor needed
const Home = () => (

  <div className="Start">

    <div className="container">

      <div className="row">

        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img alt="" src="https://images.unsplash.com/photo-1490108661355-933af4ee68a1?dpr=2&auto=format&fit=crop&w=1500&h=987&q=80&cs=tinysrgb&crop=&bg="/>
            </div>
            <div className="card-content">
            </div>
            <div className="card-action">
              <Link to="/Album/detra">Album link</Link>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
)

export default Home
