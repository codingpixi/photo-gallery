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
              <img src="images/sample-1.jpg"/>
            </div>
            <div className="card-content">
              <p>Album 1</p>
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
